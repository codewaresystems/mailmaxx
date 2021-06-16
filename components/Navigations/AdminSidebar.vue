<template>
	<v-list dense color="transparent" shaped>
		<v-list-item link v-for="(link, key) in links" :key="key" :to="{name: link.to}">
			<v-list-item-icon>
				<v-icon>{{link.icon}}</v-icon>
			</v-list-item-icon>
			<v-list-item-content>
				<v-list-item-title>{{link.name}}</v-list-item-title>
			</v-list-item-content>
		</v-list-item>
	</v-list>
</template>
<script>
	export default {
		data(){
			return{
				links: [
				{name: 'Account', icon: 'mdi-account-box', to : "admin-account"},
				{name: 'Domains', icon: 'mdi-link-box', to : "admin-domains"},
				{name: 'Billing', icon: 'mdi-cash-check', to : "admin-billing"},
				{name: 'Integrations', icon: 'mdi-code-greater-than-or-equal', to : "admin-integrations"},
				{name: 'Support', icon: 'mdi-help-box', to : "admin-support"},
				{name: 'Store', icon: 'mdi-cart-plus', to : "admin-shop"},
				],
			}
		}
	};
</script>
