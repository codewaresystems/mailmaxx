<template>
	<v-card width="100%" outlined class="rounded-l pa-2 pa-md-4">
		<v-row no-gutters>
			<v-col>
				<div class="d-flex">
					<v-icon>
						mdi-link-box
					</v-icon>
					<div class="d-flex flex-column pl-3 my-auto">
						<h4>
							{{domain.domain}}
						</h4>


					</div>
				</div>
			</v-col>
			<v-col cols="12">


				<div class="d-flex flex-wrap pt-2">

					<v-card class="d-flex pa-1 pa-md-2 rounded-lg my-auto mr-2 my-2" outlined :to="{name: 'admin-domains-domain-mailboxes', params:{domain: domain.domain}}">
						<v-icon left small>
							mdi-inbox
						</v-icon>

						<span class="my-auto caption">
							{{domain.mailbox_count}} Mailboxes
						</span>

					</v-card>	


					<v-card class="d-flex pa-1 pa-md-2 rounded-lg my-auto mr-2 my-2" outlined :to="{name: 'admin-domains-domain-admins', params:{domain: domain.domain}}">
						<v-icon left small>
							mdi-card-account-details-star-outline
						</v-icon>

						<span class="my-auto caption">
							{{domain.admin_count}} Admins
						</span>

					</v-card>


					<v-card class="d-flex pa-1 pa-md-2 rounded-lg my-2" outlined :to="{name: 'admin-domains-domain-lists', params:{domain: domain.domain}}">
						<v-icon left small>
							mdi-contacts-outline
						</v-icon>

						<span class="my-auto caption">
							{{domain.distribution_list_count}} Lists
						</span>

					</v-card>
				</div>

				<v-btn  depressed :to="{name: 'admin-domains-domain-settings', params:{domain: domain.domain}}" class="ml-auto" :small="$vuetify.breakpoint.smAndDown" small>
					
					<span class="caption text-capitalize">
						Manage
					</span>
				</v-btn>
			</v-col>
		</v-row>

	</v-card>

</template>
<script>
	export default {
		props:{
			domain:{
				required : true
			}
		}
	};
</script>