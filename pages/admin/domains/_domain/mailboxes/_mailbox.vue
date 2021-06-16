<template>
	<v-dialog v-model="dialog" persistent :fullscreen="$vuetify.breakpoint.smAndDown" :hide-overlay="$vuetify.breakpoint.smAndDown" class="elevation-0">
		<v-card tile flat :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '800'" class="mx-auto" min-height="800">
			<v-toolbar dark height="90">
				<v-spacer></v-spacer>
				<v-chip color="primary">
					<span class="caption font-weight-bold">
						{{mailbox.username}}
					</span>
				</v-chip>
				<v-spacer></v-spacer>
				<back-button></back-button>
				<template v-slot:extension>
					<v-tabs v-model="tabs" color="white" centered>
						<v-tabs-slider color="primary"></v-tabs-slider>
						<v-tab :key="'details'">
							<span class="subtitle text-capitalize font-weight-bold">
								Details
							</span>
						</v-tab>
						<v-tab :key="'security'">
							<span class="subtitle text-capitalize font-weight-bold">
								Security
							</span>
						</v-tab>

						<v-tab :key="'forwarding'">
							<span class="subtitle text-capitalize font-weight-bold">
								Forwarding
							</span>
						</v-tab>

						<v-tab :key="'settings'">
							<span class="subtitle text-capitalize font-weight-bold">
								Settings
							</span>
						</v-tab>
					</v-tabs>


				</template>
			</v-toolbar>
			<v-tabs-items v-model="tabs">
				<v-tab-item class="px-3">
					<v-card outlined max-width="700" class="mx-auto mt-5 py-5 px-2 px-md-5">
						<v-card-title>
							Details
						</v-card-title>
						<edit-mailbox-fullname @mailbox-updated="refresh" class="mt-2"  :mailbox="mailbox"></edit-mailbox-fullname>
						<manage-mailbox-quota  @mailbox-updated="refresh" class="mt-2" :mailbox="mailbox"></manage-mailbox-quota>
					</v-card>
				</v-tab-item>

				<v-tab-item class="px-3">
					<v-card outlined max-width="700" class="mx-auto mt-5 py-5 px-2 px-md-5">
						<v-card-title>
							Security
						</v-card-title>
						<change-mailbox-password @mailbox-updated="refresh" :mailbox="mailbox"></change-mailbox-password>
					</v-card>
				</v-tab-item>

				<v-tab-item class="px-3">
					<v-card outlined max-width="700" class="mx-auto mt-5 py-5 px-2 px-md-5">
						<v-card-title>
							Email Forwarding
						</v-card-title>
						<template v-if="mailbox.forwardings.length > 0">
							<v-dialog v-model="deleting" persistent>
								<v-card max-width="300" class="black rounded-xl px-4 py-8 mx-auto" flat>
									<h3 class="text-center">
										Delete Forwarding?
									</h3>
									<p class="text-center grey--text caption">
										This action cannot be reversed. 
									</p>

									<div class="d-flex">
										<v-spacer></v-spacer>
										<v-btn rounded dark @click="cancelDelete">
											<span class="caption text-capitalize font-weight-bold">
												Cancel
											</span>
										</v-btn>
										<span class="mx-2"></span>
										<v-btn rounded dark color="pink" @click="deleteForwarding" :loading="loading">
											<span class="caption text-capitalize font-weight-bold px-4">
												Delete
											</span>
										</v-btn>

										<v-spacer></v-spacer>						
									</div>

								</v-card>
							</v-dialog>
							<v-card v-for="f in mailbox.forwardings" :key="f.id" outlined class="pa-3 mb-2">
								<div class="d-none d-md-flex py-2">
									<v-chip label outlined dark>
										<span class="caption">
											{{f.address}}
										</span>
									</v-chip>
									<v-icon class="my-auto primary mx-2 rounded">
										mdi-chevron-right
									</v-icon>
									<v-chip label outlined dark>
										<span class="caption">
											{{f.forwarding}}
										</span>
									</v-chip>
								</div>

								<div class="d-flex d-md-none  py-2">
									<div class="d-flex flex-column">
										<v-chip label outlined dark class="mb-2 px-16">
											<span class="caption">
												{{f.address}}
											</span>
										</v-chip>

										<v-chip label outlined dark class="px-16">
											<span class="caption">
												{{f.forwarding}}
											</span>
										</v-chip>
									</div>
									<v-icon class="my-auto primary ml-n4 rounded">
										mdi-chevron-down
									</v-icon>
								</div>

								<v-btn color="pink darken-2" dark small depressed @click="initDeleteForwarding(f)">
									<v-icon left>
										mdi-delete
									</v-icon>
									<span class="caption text-capitalize">
										Delete
									</span>
								</v-btn>
							</v-card>
						</template>
						<create-forwarding  @forwarding-created="refresh" class="mt-2" :mailbox="mailbox"></create-forwarding>
					</v-card>
				</v-tab-item>

				<v-tab-item class="px-3">
					<v-card outlined max-width="700" class="mx-auto mt-5 py-5 px-2 px-md-5">
						<v-card-title>
							Settings
						</v-card-title>
						<mailbox-settings :mailbox="mailbox"></mailbox-settings>
					</v-card>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
	</v-dialog>
</template>
<script>
	export default {
		async asyncData({$axios, error, params, $config}){
			let mailbox = await $axios.$get(`${$config.BASEURL}/mailbox/${params.mailbox}/`)
			let domain = await $axios.$get(`${$config.BASEURL}/domain/${params.domain}/`)
			Promise.all([domain, mailbox]).catch(err => {
			})

			return { domain, mailbox}
		},


		data () {
			return {
				dialog: true,
				tabs : null,
				deleting : false,
				loading: false,
				forwardingObject : {}

			}
		},

		methods:{
			async refresh(){
				await this.$nuxt.refresh()
			},

			initDeleteForwarding(data){
				this.deleting = true
				this.forwardingObject = data
			},

			cancelDelete(){
				this.deleting = false
				this.forwardingObject = {}
			},

			async deleteForwarding(){
				this.loading = true
				await this.$axios.$delete(`${this.$config.BASEURL}/forwarding/${this.forwardingObject.id}/`, ).then(async res=>{
					await this.refresh();
					this.loading = false
				}).catch(err=>{
					this.loading = false
				})
			}
		}
	}
</script>

<style>
.v-dialog{
	box-shadow: none !important
}
</style>
