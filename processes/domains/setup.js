const setupExistingDomain = {
	methods:{
		async setUp(){

			this.domainErrors = null
			this.valid = await this.$refs.domainInput.validate(true)
			if (!this.valid) {
				return
			}

			this.loading = true

			await this.$axios.$post(`${this.$config.BASEURL}/domain/`, {domain : this.domain}).then(res=>{
				this.loading = false
				this.$emit('done')
				this.$toast.showMessage({ content: `${this.domain} added to your domains`, color: 'success darken-2', icon: 'mdi-check' })
			}).catch(err=>{
				if (err.response.data && err.response.data.domain) { 
					this.domainErrors = err.response.data.domain 
				} else{
					this.domainErrors = `Sorry... we ran into a problem adding ${this.domain} to your domains`
				}
				this.loading = false
			})

		}
	},


}


const setupNewDomain = {

	data(){
		return{
			loading: false,
			available : false,
			domainObject : {},
			proceed : false,
			ref : '',
			otpRequired : false,
			otpCode : '',
			momoPrompt: false
		}
	},
	methods:{
		async checkAvailability(){
			this.domainErrors = null
			this.valid = await this.$refs.domainInput.validate(true)
			if (!this.valid) {
				return
			}

			this.loading = true
			await this.$axios.post(`${this.$config.BASEURL}/domain/check_availability/`, {domain_name: this.domain}).then(res=>{
				if (res.data.purchasable) {
					this.available = true
					this.domainObject = res.data
				} else{
					this.available = false
					this.domainErrors = `${this.domain} is taken`
				}

				this.loading = false
			}).catch(err=>{
				this.available = false
				if (err.response.data && err.response.data.msg) { 
					this.domainErrors = err.response.data.msg 
				} else{
					this.domainErrors = `Sorry... we ran into a problem adding ${this.domain} to your domains`
				}
				this.loading = false
			})
		},

		async initiateMomoPayment(){

			this.loading = true

			await this.$axios.$post(`${this.$config.BASEURL}/checkout/`,{
				payment_method : 'momo',
				momo_provider: this.provider,
				momo_number : this.mobile.replace(/\+/g,'').replace( /\s/g, ''),
				amount: 1, // this.theDomainObject.purchasePrice,
				product_name: this.theDomainObject.domainName,
				product_type: 'Domain Registration'
			}).then(res=>{
				this.ref = res.reference
				if (res.type  ===  'send_otp') {
					this.otpRequired = true
					this.loading = false
					return
				}

				this.momoPrompt = true
				this.loading = false

			}).catch(err=>{
				this.loading = false
			})

		},

		async verifyOTP() {
			this.loading = true
			await this.$axios.$post(`${this.$config.BASEURL}/otp/`, {
				otp : this.otpCode,
				reference : this.ref
			}).then(async res => {
				this.loading = false
				this.otpRequired = false
				this.momoPrompt = true

			}).catch(err => {
				this.loading = false
				this.$toast.showMessage({content: 'OTP Verification Failed', color: 'pink'})
			})
		},

		async finalizePayment(){	

		},


		async payWithCard(){
			this.loading = true	

			await this.$axios.$post(`${this.$config.BASEURL}/checkout/`,{
				payment_method : 'card',
					amount: 1, // this.theDomainObject.purchasePrice,
					product_name: this.theDomainObject.domainName,
					product_type: 'Domain Registration'
				}).then(res=>{
					window.location.href = res.url
				}).catch(err=>{
					this.$toast.showMessage({content: 'Card payment failed', color: 'pink'})
					this.loading = false
				})
			}
		}

	}

	const base = {
		data(){
			return{
				loading : false,
				domain : 'kirkiee.co',
				valid : true,
				domainErrors: '',
				rules:{
					domain :{
						required : value => !!value || 'Please enter a domain name',
						isValidDomain : value => {
							const pattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/
							return pattern.test(value) || 'Enter valid domain'
						}
					}
				}
			}
		},
	}


	export {
		base,
		setupNewDomain,
		setupExistingDomain,
	}