<template>
	<v-card tile flat color="transparent" max-width="1200" class="mr-auto">
		<v-card flat color="transparent">
			<div class="py-5 d-flex">
				<v-chip color="primary">
					<v-icon left>
						mdi-link
					</v-icon>
					{{theDomain.domain}}
				</v-chip>
				<v-spacer></v-spacer>

				<domain-actions class="my-auto"></domain-actions>
			</div>
			<v-tabs left exact>
				<v-tabs-slider color="white"></v-tabs-slider>
				<v-tab :to="{name: 'admin-domains'}" exact>
					<span class="text-uppercase caption font-weight-bold">
						<small class="font-weight-bold">
							Domains
						</small>
					</span>
				</v-tab>

				<v-tab :to="{name: 'admin-domains-domain-mailboxes', params:{domain: theDomain.domain}}" exact>
					<span class="text-uppercase caption font-weight-bold">
						<small class="font-weight-bold">
							Mailboxes
						</small>
					</span>
				</v-tab>

				<v-tab :to="{name: 'admin-domains-domain-lists', params:{domain: theDomain.domain}}" exact>
					<span class="text-uppercase caption font-weight-bold">
						<small class="font-weight-bold">
							Distribution Lists
						</small>
					</span>
				</v-tab>

				<v-tab :to="{name: 'admin-domains-domain-admins', params:{domain: theDomain.domain}}" exact>
					<span class="text-uppercase caption font-weight-bold">
						<small class="font-weight-bold">
							Admins
						</small>
					</span>
				</v-tab>
				<v-tab :to="{name: 'admin-domains-domain-settings', params:{domain: theDomain.domain}}" exact>
					<span class="text-uppercase caption font-weight-bold">
						<small class="font-weight-bold">
							DNS Manager
						</small>
					</span>
				</v-tab>
			</v-tabs>
		</v-card>
		<div class="pt-5 px-2">
			<!-- {{ theDomain }} -->
			<nuxt-child :domain="theDomain"/>
		</div>
	</v-card>
</template>
<script>
	export default {

		async asyncData({$axios, params, error, $config}){
			let theDomain = {}
			await $axios.$get(`${$config.BASEURL}/domain/${params.domain}/`).then(res => {
				theDomain = res
			}).catch(err=>{
				error({statusCode : 404, message : 'The domain you are lookin gfor does not exist'})
			})


			return{theDomain}

		},
		data () {
			return {
				menu: false,
				tab: null,
				items: [
				'web', 'shopping', 'videos', 'images', 'news',
				],
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			}
		},

	};
</script>
