export const state = () =>	({
})

export const actions = {
	async refreshUser({dispatch}){
		await this.$axios.$get(`${this.$config.BASEURL}/profile/`).then(async res => {
			await this.$auth.setUser(res)
		}).catch(err=>{
			// fail silently
		});
		
	}
}
