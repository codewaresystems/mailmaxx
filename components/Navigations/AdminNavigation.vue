<template>
	<v-app-bar :clipped-left="true" fixed app dark color="secondary" flat>
		<v-app-bar-nav-icon class="d-flex d-md-none" @click="$emit('draw')"/>
		<v-btn class="d-none d-md-flex" icon @click="$emit('minify')" color="default">
			<v-icon>mdi-menu</v-icon>
		</v-btn>
		<nuxt-link :to="{name: 'index'}" class="mr-2 mr-md-4 text-decoration-none">
			<app-logo></app-logo>
		</nuxt-link>
		<v-spacer />
		<quick-settings></quick-settings>
		<ecosystem-apps></ecosystem-apps>
	</v-app-bar>
</template>
<script>
	export default {
		data () {
			return {
				drawer: false,
				miniVariant: this.toggle,
			}
		},

		props:{
			toggle:{
				type:Boolean
			}
		}
	};
</script>
