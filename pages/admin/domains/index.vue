<template>
	<div>
		<div class="d-flex mb-2">
			<h1 class="my-auto">
				Domains
			</h1>

			<v-spacer></v-spacer>
			<v-btn dark depressed color="primary" :to="{name: 'admin-domains-new'}" class="my-auto">
				<v-icon left>
					mdi-plus-circle
				</v-icon>
				<span class="text-capitalize caption">
					Add New
				</span>
			</v-btn>
		</div>
		<p class="grey--text">
			Find a new custom domain name for your brand, or manage the exisiting domain(s) you've purchased with {{$appName}}.
		</p>
		

		<v-divider class="my-5"></v-divider>

		<h3>
			Your Domains
		</h3>
		<v-row class="mt-5">
			<v-col cols="12" md="6" xl="4" v-for="(domain, key) in domains" :key="key">
				<domain :domain="domain" :key="domain.domain"></domain>
			</v-col>
		</v-row>
		
	</div>
</template>
<script>
	export default {
		head(){
			return{
				title: `Domains`
			}
		},
		async asyncData({$axios, params, $config, error}){
			let domains =  await $axios.$get(`${$config.BASEURL}/domain`)
			return {domains}
		}
	};
</script>

