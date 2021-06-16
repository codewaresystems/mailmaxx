<template>
	<v-dialog v-model="dialog" persistent max-width="450">
		<template v-slot:activator="{ on, attrs }">
			<v-btn outlined x-large block color="grey darken-3" class="dark" v-bind="attrs" v-on="on">
				<v-icon left class="error rounded-circle" color="white" small>
					mdi-close-circle
				</v-icon>
				<span class="text-caption grey--text">
					I don't have a domain
				</span>
			</v-btn>

		</template>
		<v-card class="pa-5">
			<h4 class="text-center">
				Get a domain with <span class="text-capitalize">{{ $appName }}</span>
			</h4>
			<v-card-text class="text-center">
				We will purchase your domain and automatially configure your inbox.
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="error lighten-1" class="mr-2" text	@click="dialog = false"	>
					Cancel
				</v-btn>
				<buy-domain-flow @completed = "(payload) => { dialog = false; $emit('next')}"></buy-domain-flow>
				<v-spacer></v-spacer>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		data () {
			return {
				dialog: false,
			}
		},
	}
</script>