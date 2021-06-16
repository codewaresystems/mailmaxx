import {mapGetters} from 'vuex'
import Vue from 'vue'

const appTheme = {
	// install (Vue, options){
	// 	Vue.mixin({

	// 		data(){
	// 			return{
	// 				darkMode : false
	// 			}
	// 		},

	// 		computed: {
	// 			isDark(){
	// 				return this.darkMode
	// 			}
	// 		},

	// 		watch:{
	// 			async darkMode(nu, old){
	// 				localStorage.setItem('mailmaxx-darkMode', this.isDark)
	// 				// this.$vuetify.theme.dark = await (localStorage.getItem('mailmaxx-darkMode') && localStorage.getItem('mailmaxx-darkMode') === 'true') ? true : false
	// 				await this.$nuxt.refresh()
	// 			}
	// 		},

	// 		methods:{
	// 			async setTheme(){
	// 				if (process.client) {
	// 					this.$vuetify.theme.dark = await (localStorage.getItem('mailmaxx-darkMode') && localStorage.getItem('mailmaxx-darkMode') === 'true') ? true : false
	// 				}
	// 			}
	// 		},

	// 		mounted(){
	// 			this.darkMode =  (localStorage.getItem('mailmaxx-darkMode') && localStorage.getItem('mailmaxx-darkMode') === 'true') ? true : false
	// 			this.$vuetify.theme.dark = this.darkMode
	// 		}
	// 	})
	// }
}

Vue.use(appTheme)