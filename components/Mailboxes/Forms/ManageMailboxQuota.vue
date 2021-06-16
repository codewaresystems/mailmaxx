<template>
	<v-card outlined :class="editing ? 'pa-2' : '' ">
		<div v-show="!editing" @click="editing = true">
			<div class="d-flex px-2 py-3">
				<span class="caption my-auto">
					Storage Quota
				</span>
				<v-spacer></v-spacer>
				<span class="subtitle my-auto text-truncate">
					{{mailbox.quota}} MB
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
			<v-text-field hide-details="auto" class="my-4" label="Set Storage Quota (MB)" outlined color="grey" type="number" v-model="mailboxInfo.quota"></v-text-field>
			<div class="mt-4">
				<v-btn depressed  color="primary" height="40" :loading="loading" @click.prevent="updateMailbox(mailboxInfo)">
					<span class="caption text-capitalize font-weight-bold">
						Update Quota
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
					quota : this.mailbox.quota ? this.mailbox.quota : "",
				}
			}
		}
	};
</script>
