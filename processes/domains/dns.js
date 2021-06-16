const bindProps ={
	data(){
		return {
			types : [
			{value : 'A', text : 'A'}, 
			{value : 'MX', text : 'MX'}, 
			{value : 'CNAME', text: 'CNAME'}, 
			{value : 'TXT', text : 'TXT'}, 
			{value : 'AAAA' , text : 'AAAA'}, 
			{value : 'SRV', text : 'SRV'}, 
			{value : 'NS', text : 'NS'},
			{value : 'ANAME', text : 'ANAME'}
			],

			record : {
				type : '',
				host: '',
				ttl: '300',
				answer : '',
				domain : this.domain.domain
			}
		}
	}
}

const addRecord = {
	data(){
		return {
			loading : false,
			flashMessage : {
				content : '',
				color : '',
				icon : ''
			}
		}
	},
	methods:{
		createFlashMessage( message,  color , icon = 'mdi-close'){
			this.flashMessage.content = message
			this.flashMessage.color = color
			this.flashMessage.icon = icon
		},

		async addDnsRecord(){
			if (!this.record.type || !this.record.host || !this.record.answer) {
				await this.createFlashMessage('Some data is missing', 'primary' )
				this.$toast.showMessage(this.flashMessage)
				return
			}
			this.loading = true
			await this.$axios.$post(`${this.$config.BASEURL}/hostrecord/`, this.record).then(async res=>{
				await this.$nuxt.refresh()
				await this.createFlashMessage('Host record added successfully', 'primary' , 'mdi-check')
			}).catch(async error => {
				await this.createFlashMessage('Failed to add host record', 'error')
			}).finally( () => {
				this.loading = false
				this.$toast.showMessage(this.flashMessage)
				
			})
		}
	}
}


const updateRecord = {

}

const getReord = {

}

const deleteRecord = {

}


const listRecords = {
	data(){
		return {
			hostRecords : []
		}
	},


	methods : {
		async getHostRecords(domain){
			await this.$axios.$get(`${this.$config.BASEURL}/hostrecord/?domain=${domain}`).then(res => {
				this.hostRecords = res.records
			}).catch(err => {
				console.log(err)
			})
		}
	}
}

export {
	addRecord, 
	updateRecord,
	getReord,
	deleteRecord,
	bindProps,
	listRecords
}