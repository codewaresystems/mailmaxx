export const state = () => ({
	content: '',
	color: '',
	timeout: 5000,
	icon : ''
})

export const mutations = {
	showMessage (state, payload) {
		state.content = payload.content
		state.color = payload.color
		state.icon = payload.icon ? payload.icon : 'mdi-check' 
		state.timeout = payload.timeout
	}
}