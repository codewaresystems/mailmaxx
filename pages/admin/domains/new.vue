<template>
	<v-card flat :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '600'" class="mr-auto rounded-lg" outlined>
		<v-toolbar class="black rounded-t-lg" tile flat>
			<v-toolbar-title>
				Domain Setup
			</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-toolbar>
		<v-divider dark></v-divider>
		<div class="py-md-10 pa-4 pa-md-8 black" v-show="!branch">

			<p class="grey--text text--lighten-1">
				You can acquire a new domain or set up a domain you already own for use with {{$appName}}
			</p>

			<div class="d-flex flex-wrap">
				<v-btn colro="white" light large class="ma-2" @click.stop="branch = 'existing' ">
					<span class="text-capitalize caption font-weight-bold">
						Existing Domain
					</span>
				</v-btn>

				<v-btn large color="primary" class="ma-2" @click.stop="branch = 'new' ">
					<span class="text-capitalize caption font-weight-bold">
						New Domain
					</span>
				</v-btn>

			</div>
		</div>
		<div class="py-md-10 pa-4 pa-md-8 black" v-if="branch">
			<add-existing-domain v-if="branch === 'existing'" @done="handleDone">
				<v-btn outlined large @click.stop="branch = null " slot="actions" color="grey">
					<span class="text-capitalize caption font-weight-bold">
						Cancel
					</span>
				</v-btn>
			</add-existing-domain>
			<acquire-new-domain v-else-if="branch === 'new'">
				<v-btn outlined large @click.stop="branch = null " slot="actions" color="grey">
					<span class="text-capitalize caption font-weight-bold">
						Cancel
					</span>
				</v-btn>
			</acquire-new-domain>
		</div>
	</v-card>
</template>
<script>
	export default {
		data(){
			return {
				show : true,
				branch : null
			}
		},

		methods:{
			async handleDone(){
				await this.$router.push({
					name: 'admin-domains'
				})

				await this.$nuxt.refresh()
			}
		}
	};
</script>
<style>
.v-dialog{
	box-shadow: none !important
}
</style>
