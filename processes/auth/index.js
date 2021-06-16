const base = {
	data(){
		return{
			loading : false
		}
	}
}

const login = {
	data(){
		return {
			email: 'nanayaw@emailgh.com',
			password : 'password',
			valid: true,
			failed:{
				status : false,
				reason : '' 
			},
			rules: {
				password: {
					required : value => !!value || 'Password is required',
				},

				email:{
					required : value => !!value || 'Email is required',
					valid: value => {
						const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
						return pattern.test(value) || 'Enter valid email'
					},
				}
			},
		}
	},

	methods:{
		validateInput(){
			this.$refs.authLogin.validate();
		},

		resetValidation(){
			this.$refs.authLogin.resetValidation();
		},
		async loginUser(){
			this.failed.status = false
			this.failed.reason = null
			await this.validateInput()
			if (!this.valid) {
				return
			}

			try{
				this.loading = true

				let data = new FormData();

				data.append('username', this.email)
				data.append('password', this.password)

				await this.$auth.loginWith('local', { data }, {
					headers:{
						'Content-Type' : 'multipart/form-data',
					}
				})
				this.loading = false
				this.$emit('login-successful')
				this.$router.push({
					name: 'm-box',
					params:{
						box : 'inbox' 
					}
				})
			}catch(error){
				this.failed.status = true
				this.failed.reason = error.response.data.detail ? error.response.data.detail : "Something went wrong. please try again" 
				this.$emit('login-failed')
				this.loading = false
			}
		}
	}
}


const signUp = {
	data(){
		return{
			valid: true,
			failed:{
				status : false,
				reason : '' 
			},
			regForm:{
				first_name : "",
				last_name : "",
				password : "",
				username : "",
			},

			field : 'password',

			rules: {
				password: {
					required : value => !!value || 'Password is required',
					min : value => value.length > 5 || 'Password should be at least 6 characters'
				},

				first_name:{
					required : value => !!value || 'First name field is required',
				},


				last_name:{
					required : value => !!value || 'Last name field is required',
				},
				username:{
					required : value => !!value || 'Username field is required',
				},
			},
		}
	},

	methods : {
		validateInput(){
			this.$refs.authRegister.validate();
		},

		resetValidation(){
			this.$refs.authRegister.resetValidation();
			this.failed.status = false
			this.failed.reason = null
		},

		async performLogin(){
			try{
				let data = new FormData();
				let domain = `${this.regForm.username+this.$tld}`
				data.append('username', domain)
				data.append('password', this.regForm.password)

				await this.$auth.loginWith('local', { data }, {
					headers:{
						'Content-Type' : 'multipart/form-data',
					}
				})
				this.loading = false
				this.$emit('login-successful')
				this.$router.push({
					name: 'welcome',
				})
			}catch(error){
				this.failed.status = true
				this.failed.reason = error.response.data.detail ? error.response.data.detail : "Something went wrong. please try again" 
				this.$emit('login-failed')
				this.loading = false
			}
		},

		async register(){
			this.failed.status = false
			this.failed.reason = null
			await this.validateInput()
			if (!this.valid) {
				return
			}

			this.loading = true

			let form  = new FormData();
			Object.keys(this.regForm).forEach(key => {
				form.append(key, this.regForm[key])
			})
			await this.$axios.$post(`${this.$config.BASEURL}/account/`, form, {
				headers:{
					'Content-Type' : 'multipart/form-data',
				}
			}).then( async res =>{
				await this.performLogin()
			}).catch(error=>{
				this.failed.status = true
				this.failed.reason = error.response.data.detail ? error.response.data.detail : "Something went wrong. please try again" 
				this.$emit('signup-failed')
				this.loading = false
			})
		}
	}
}




export { base , login, signUp}