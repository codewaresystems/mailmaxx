<template>
	<v-card outlined :class="editing ? 'pa-2' : '' ">
		<div v-show="!editing" @click="editing = true">
			<div class="d-flex px-2 py-3">
				<span class="caption my-auto">
					Password
				</span>
				<v-spacer></v-spacer>
				<span class="subtitle my-auto text-truncate">
					Change Password
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
			<v-text-field hide-details="auto" class="my-4" label="Enter New Password" type="password" outlined color="grey" v-model="mailboxInfo.password"></v-text-field>
			<v-text-field hide-details="auto" class="my-4" label="Confirm New Password" type="password" outlined color="grey" v-model="password_confirm"></v-text-field>
			<div class="mt-4">
				<v-btn depressed  color="primary" height="40" :loading="loading" @click.prevent="updateMailbox(mailboxInfo)" :disabled="!password_confirm || (mailboxInfo.password !== password_confirm)">
					<span class="caption text-capitalize font-weight-bold">
						Change Password
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
				password_confirm : '',
				mailboxInfo : {
					password : ''
				}
			}
		}
	};
</script>
