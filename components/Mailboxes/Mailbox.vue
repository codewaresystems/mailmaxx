		<template>
			<v-card width="100%">
				<v-sheet height="15"></v-sheet>
				<v-sheet class="d-flex px-2 px-md-4 pb-3">
					
					<v-avatar class="d-none d-md-flex" color="primary" size="30" style="border: 3px solid white">
						<span class="white--text caption text-capitalize">{{ name.charAt(0) }}</span>
					</v-avatar>
					<div class="d-flex flex-column px-4 w-100">
						<v-sheet width="100%" class="d-flex d-md-none">
							<v-avatar class="mb-2" color="primary" size="25" style="border: 3px solid white">
								<span class="white--text caption">{{ name.charAt(0) }}</span>
							</v-avatar>
							
							<v-btn small depressed class="ml-auto my-auto" :to="{name: 'admin-domains-domain-mailboxes-mailbox', params:{domain: mailbox.domain, mailbox: mailbox.username}}">
								<span class="subtitle text-capitalize">
									manage
								</span>
							</v-btn>
						</v-sheet>
						<h5 class="font-weight-bold">
							{{name}}	
						</h5>
						<span class="caption grey--text text--lighten-1">
							{{mailbox.username}}
						</span>
						<div class="pt-3 d-none d-md-flex">
							<v-btn small depressed class="mr-auto" :to="{name: 'admin-domains-domain-mailboxes-mailbox', params:{domain: mailbox.domain, mailbox: mailbox.username}}">
								<span class="subtitle text-capitalize">
									manage
								</span>
							</v-btn>
						</div>
					</div>
				</v-sheet>
			</v-card>
		</template>
		<script>
			export default {
				props:{
					mailbox:{
						required : true
					}
				},
				computed:{
					name(){
						return `${this.mailbox.first_name} ${this.mailbox.last_name}`
					}
				}
			};
		</script>
		<style>
		.w-100{
			width: 100%;
		}
	</style>