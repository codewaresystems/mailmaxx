export const state = () => ({
	list: [
	{name: 'Bussit', icon: 'https://dev.bussit.co/logo-text.svg'},
	{name: 'Kwidex', icon: 'https://dev.kwidex.com/assets/logos/white-logo.svg'},
	{name: 'Dell', icon: 'https://images.ctfassets.net/oqcgx0hzeqgm/22zpoi7BzBWR4YUsEOMeUR/e0dd819258d33a160d0596e79d8eb03c/Dell-svg__1___1_.svg'},
	{name: 'Lyft', icon: 'https://images.ctfassets.net/oqcgx0hzeqgm/1zAqYuDg2M9cp1abEg5bmq/a0a1375b59569214019684821c3d0978/lyft__1___1_.svg'}

	]
})

export const getters = {
	clients(state){
		return state.list
	}
}