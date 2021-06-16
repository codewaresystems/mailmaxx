const update = {
	data(){
		return {
			editing : false,
			loading : false
		}
	},

	props:{
		mailbox : {
			required : true
		} 
	},

	methods:{
		async updateMailbox(data){
			this.loading = true
			this.$axios.$patch(`${this.$config.BASEURL}/mailbox/${this.mailbox.username}/`, data).then(res=>{
				this.loading = false
				this.$toast.showMessage({
					content : 'Mailbox Details Updated',
					color: 'success darken-2',
					icon: 'mdi-check'
				})
				this.$emit('mailbox-updated')
			}).catch(err=>{
				this.loading = false
				this.$toast.showMessage({
					content : 'Failed to update mailbox info',
					color: 'error',
					icon: 'mdi-close'
				})
			})
		},

		createForwarding(){
			this.loading = true
			this.$axios.post(`${this.$config.BASEURL}/forwarding/`, {
				name: this.forwarding.name,
				forwarding: this.forwarding.forwarding,
				address: this.mailbox.username,
				domain : this.mailbox.domain,
				dest_domain : this.forwarding.forwarding.substring(this.forwarding.forwarding.lastIndexOf('@')+1),
				is_forwarding : 1 
			}).then(res=>{
				this.loading = false
				this.$toast.showMessage({
					content : 'Forwarding created',
					color: 'success darken-2',
					icon: 'mdi-check'
				})
				this.$emit('forwarding-created')
				this.editing = false
			}).catch(err=>{
				this.loading = false
				this.$toast.showMessage({
					content : 'Failed to create forwarding',
					color: 'error',
					icon: 'mdi-close'
				})
			})
		}
	}


}

export { update }