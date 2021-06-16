<template>
	<v-card outlined :class="editing ? 'pa-2' : '' ">
		<div v-show="!editing" @click="editing = true">
			<div class="d-flex px-2 py-3">
				<span class="caption my-auto">
					Forwading
				</span>
				<v-spacer></v-spacer>
				<span class="subtitle my-auto text-truncate">
					Creata A Fowarding
				</span>
				<v-spacer></v-spacer>

				<v-btn icon class="my-auto">
					<v-icon>
						mdi-plus-circle
					</v-icon>
				</v-btn>
			</div>
		</div>

		<div v-show="editing">
			<v-text-field hide-details="auto" class="my-4" label="Forwarding Name" outlined color="grey" v-model="forwarding.name"></v-text-field>
			<v-text-field hide-details="auto" class="my-4" label="Enter Destination Address"  outlined color="grey" type="email" v-model="forwarding.forwarding"></v-text-field>
			<div class="mt-4">
				<v-btn depressed  color="primary" height="40" :loading="loading" @click.prevent="createForwarding">
					<span class="caption text-capitalize font-weight-bold">
						Create Forwarding
					</span>
				</v-btn>

				<v-btn @click="editing = false" depressed height="40" >
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
				forwarding:{
					name: '',
					forwarding : '', // address
				}
			}
		},
	};
</script>
