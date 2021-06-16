<template>
	<v-app-bar :clipped-left="true" fixed app color="secondary"  dark flat>
		<nuxt-link :to="{name: 'index'}" class="mr-2 mr-md-4 text-decoration-none">
			<app-logo></app-logo>
		</nuxt-link>
		<v-spacer />

		<v-btn text plain :ripple="false" class="mr-2 d-none d-md-flex" nuxt :to="{name: 'pricing'}">
			<span class="text-capitalize">
				Pricing
			</span>
		</v-btn>

		<v-btn text plain :ripple="false" class="mr-2 d-none d-md-flex" nuxt :to="{name: 'downloads'}">
			<span class="text-capitalize">
				Downloads
			</span>
		</v-btn>


		<v-btn depressed :ripple="false" class="mr-2 d-none d-md-flex" color="error"  nuxt :to="{name: 'logout'}" v-if="$auth.loggedIn">
			<span class="text-capitalize">
				Logout
			</span>
		</v-btn>

		<v-btn text plain :ripple="false" class="mr-2 d-none d-md-flex"  nuxt :to="{name: 'login'}" v-if="!$auth.loggedIn">
			<span class="text-capitalize">
				Sign In
			</span>
		</v-btn>
		<v-btn depressed color="primary" class="d-none d-md-flex" nuxt :to="{name: 'signup'}" v-if="!$auth.loggedIn" tile>
			<span class="text-capitalize">
				Get Started
			</span>
		</v-btn>
		<v-btn icon class="d-flex d-md-none" nuxt :to="{name: 'login'}" v-if="!$auth.loggedIn">
			<v-icon>mdi-account</v-icon>
		</v-btn>

		<v-btn icon class="d-flex d-md-none" nuxt :to="{name: 'logout'}" width="40" height="40" v-else>
			<v-icon>mdi-power</v-icon>
		</v-btn>

	</v-app-bar>
</template>
<script>
	export default {
		data () {
			return {
				bg: 'transparent'
			}
		},

		computed : {
			theBg(){
				return this.bg
			}
		} ,

		methods:{
			alertMe(e){
				this.bg = 'primary'
				console.log(e)
			}
		}
	};
</script>
