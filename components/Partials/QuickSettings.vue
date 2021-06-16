<template>
	<div class="text-center">
		<v-menu	v-model="menu" :close-on-content-click="true" :nudge-width="250" offset-x>
			<template v-slot:activator="{ on, attrs }">
				<v-avatar size="35" v-bind="attrs" v-on="on" style="border: 2px solid #1976d2">
					<img src="https://cdn.vuetifyjs.com/images/john.jpg">
				</v-avatar>
			</template>

			<v-card>
				<v-list>
					<v-list-item>
						<v-list-item-avatar>
							<img src="https://cdn.vuetifyjs.com/images/john.jpg">
						</v-list-item-avatar>

						<v-list-item-content>
							<v-list-item-title>
								{{$auth.user.first_name}} {{$auth.user.last_name ? $auth.user.last_name : ''}}
							</v-list-item-title>

							<div class="my-2">
								<v-btn color="primary" to="/admin" small depressed>
									<span class="text-capitalize">
										Admin Dashboard
									</span>
								</v-btn>
							</div>
							<!-- <v-list-item-subtitle>
								Quick Settings
							</v-list-item-subtitle> -->
						</v-list-item-content>


					</v-list-item>
				</v-list>

				<v-divider></v-divider>

				<v-list>
					<v-list-item>
						<v-list-item-action>
							<v-switch v-model="message" color="primary"></v-switch>
						</v-list-item-action>
						<v-list-item-title>Enable Dektop Notifications</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-action>
							<v-switch @change="switchMode" color="primary"></v-switch>
						</v-list-item-action>
						<v-list-item-title>Dark Mode</v-list-item-title>
					</v-list-item>
				</v-list>

				<v-list-item link v-for="(link, key) in links" :key="key" :to="{name: link.to}">
					<v-list-item-icon>
						<v-icon>{{link.icon}}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{link.name}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item link :to="{name: 'logout'}">
					<v-list-item-icon>
						<v-icon>mdi-cog</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Logout</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-card>
		</v-menu>
	</div>
</template>


<script>
	export default {
		data: () => ({
			menu: false,
			message: false,
			links: [
			{name: 'Account', icon: 'mdi-account-box', to : "admin-account"},
			{name: 'Domains', icon: 'mdi-link-box', to : "admin-domains"},
			{name: 'Billing', icon: 'mdi-cash-check', to : "admin-billing"},
			{name: 'Integrations', icon: 'mdi-code-greater-than-or-equal', to : "admin-integrations"},
			{name: 'Support', icon: 'mdi-help-box', to : "admin-support"},
			{name: 'Store', icon: 'mdi-cart-plus', to : "admin-shop"},
			],
		}),


		methods:{
			switchMode(e){
				this.darkMode = e
			}
		}

	}
</script>