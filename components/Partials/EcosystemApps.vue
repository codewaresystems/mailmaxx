<template>
	<div class="text-center">
		<v-menu	v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
			<template v-slot:activator="{ on, attrs }">
				<v-btn icon color="default" dark v-bind="attrs" v-on="on">
					<v-icon>mdi-dots-grid</v-icon>
				</v-btn>
			</template>

			<v-card>
				<v-list>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>
								Ecosystem
							</v-list-item-title>
							<v-list-item-subtitle>
								More Solutions Us
							</v-list-item-subtitle>
						</v-list-item-content>


					</v-list-item>
				</v-list>

				<v-divider></v-divider>

				<v-list>
					<v-list-item link v-for="(link, key) in links" :key="key" :href="link.to" target="blank">
						<v-list-item-icon>
							<v-icon>{{link.icon}}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>{{link.name}}</v-list-item-title>
						</v-list-item-content>

						<sup>
							<sup>
								<v-icon right small >
									mdi-arrow-top-right
								</v-icon>
							</sup>
						</sup>
					</v-list-item>
				</v-list>


			</v-card>
		</v-menu>
	</div>
</template>


<script>
	export default {
		data: () => ({
			fav: true,
			menu: false,
			message: false,
			hints: true,
			links: [
			{name: 'Web Development', icon: 'mdi-code-not-equal-variant', to : "https://codewaresystems.com/service"},
			{name: 'Hosting', icon: 'mdi-server', to : "https://codewaresystems.com/service"},
			{name: 'Mobile & Desktop Apps', icon: 'mdi-devices', to : "https://codewaresystems.com/service"},
			{name: 'Office Networks', icon: 'mdi-lan-connect', to : "https://codewaresystems.com/service"},
			],
		}),
	}
</script>