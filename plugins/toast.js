export default ({ app, store }, inject) => {
	inject('toast', {
		showMessage ({ content = '', color = '', icon = '' }) {
			store.commit('toasts/showMessage', { content, color, icon })
		}
	})
}