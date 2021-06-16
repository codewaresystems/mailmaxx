<template>
	<v-card flat :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '600'" class="mr-auto rounded-lg black" outlined>
		<v-toolbar class="black rounded-t-lg" tile flat>
			<v-toolbar-title>
				Account
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<template v-slot:extension>
				<v-tabs left exact>
					<v-tabs-slider color="primary"></v-tabs-slider>	
					<v-tab to="/admin/account" exact>
						<span class="text-capitalize subtitle font-weight-bold">
							Profile
						</span>
					</v-tab>

					<v-tab to="/admin/account/security" exact>
						<span class="text-capitalize subtitle font-weight-bold">
							Account Security
						</span>
					</v-tab>
				</v-tabs>
			</template>
		</v-toolbar>
		<v-divider dark></v-divider>

		<nuxt-child/>
	</v-card>
</template>
<script>
	export default {

	};
</script>
