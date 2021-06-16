<template>
	<v-card outlined :class="editing ? 'pa-2' : '' ">
		<div v-show="!editing" @click="editing = true">
			<div class="d-flex px-2 py-3">
				<span class="caption my-auto">
					Name
				</span>
				<v-spacer></v-spacer>
				<span class="subtitle my-auto text-truncate">
					{{mailbox.first_name}} {{mailbox.last_name}}
				</span>
				<v-spacer></v-spacer>

				<v-btn icon class="my-auto">
					<v-icon>
						mdi-chevron-right
					</v-icon>
				</v-btn>
			</div>
		</div>

		<div v-show="editing">
			<v-text-field hide-details="auto" class="my-4" label="First Name" outlined color="grey" v-model="mailboxInfo.first_name"></v-text-field>
			<v-text-field hide-details="auto" label="Last Name" outlined color="grey" v-model="mailboxInfo.last_name"></v-text-field>
			<div class="mt-4">
				<v-btn depressed  color="primary" height="40" :loading="loading" @click.prevent="updateMailbox(mailboxInfo)">
					<span class="caption text-capitalize font-weight-bold">
						Update Name
					</span>
				</v-btn>

				<v-btn @click="editing = false" depressed height="40">
					<span class="caption text-capitalize font-weight-bold">
						Cancel
					</span>
				</v-btn>
			</div>
		</div>

	</v-card>
</template>
<script>
	import {update} from "@/processes/mailbox"
	export default {
		mixins : [update],
		data(){
			return{
				mailboxInfo : {
					first_name : this.mailbox.first_name ? this.mailbox.first_name : "",
					last_name : this.mailbox.last_name ? this.mailbox.last_name : ""
				}
			}
		}
	};
</script>
