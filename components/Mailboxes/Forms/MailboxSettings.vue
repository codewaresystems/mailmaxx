<template>
	<v-card class="pa-4" outlined>
		
		<v-list
		flat
		subheader
		three-line
		>
		<v-subheader>General</v-subheader>

		<v-list-item-group
		v-model="settings"
		multiple
		active-class=""
		>
		<v-list-item>
			<template v-slot:default="{ active }">
				<v-list-item-action>
					<v-checkbox :input-value="active"></v-checkbox>
				</v-list-item-action>

				<v-list-item-content>
					<v-list-item-title>Active</v-list-item-title>
					<v-list-item-subtitle>
						Mark this mailbox as active.
					</v-list-item-subtitle>
				</v-list-item-content>
			</template>
		</v-list-item>

		<v-list-item>
			<template v-slot:default="{ active }">
				<v-list-item-action>
					<v-checkbox :input-value="active"></v-checkbox>
				</v-list-item-action>

				<v-list-item-content>
					<v-list-item-title>Enable Sending</v-list-item-title>
					<v-list-item-subtitle>
						Allow sending emails from this mailbox
					</v-list-item-subtitle>
				</v-list-item-content>
			</template>
		</v-list-item>

		<v-list-item>
			<template v-slot:default="{ active }">
				<v-list-item-action>
					<v-checkbox :input-value="active"></v-checkbox>
				</v-list-item-action>

				<v-list-item-content>
					<v-list-item-title>Enable Receiving</v-list-item-title>
					<v-list-item-subtitle>
						Allow receiving mails into this mailbox
					</v-list-item-subtitle>
				</v-list-item-content>
			</template>
		</v-list-item>
		<v-divider></v-divider>
		<v-btn depressed  class="mt-5" color="primary" height="40" :loading="loading">
			<span class="caption text-capitalize font-weight-bold">
				Save Settings
			</span>
		</v-btn>
	</v-list-item-group>
</v-list>
</v-card>
</template>
<script>
	import {update} from "@/processes/mailbox"
	export default {
		mixins : [update],
		data(){
			return{
				settings:[],
			}
		}
	};
</script>
