<template>
	<v-dialog v-model="buyDialog" persistent max-width="550">
		<template v-slot:activator="{ on, attrs }">
			<v-btn color="green darken-1" text v-bind="attrs" v-on="on">
				Yes. Proceed
			</v-btn>

		</template>
		<v-card class="pa-5">
			<v-stepper	v-model="stage"	vertical dark class="transparent elevation-0" v-show="incomplete">
				<v-stepper-step	:complete="stage > 1" step="1" class="transparent" color="success">
					Domain
					<small>
						Find and register a domain name for your business
					</small>
				</v-stepper-step>

				<v-stepper-content step="1">
					<v-card	color="grey lighten-1" class="mb-12" height="200px"></v-card>
					<v-btn color="primary" small @click="stage = 2"	>
						Next
					</v-btn>
				</v-stepper-content>

				<v-stepper-step	:complete="stage > 2" step="2" class="transparent" color="success">
					Payment
					<small>
						Process payment
					</small>
				</v-stepper-step>
				<v-stepper-content step="2">
					<v-card	color="grey lighten-1" class="mb-12" height="200px"></v-card>
					<v-btn	color="primary"	@click="checkout">
						Checkout
					</v-btn>
				</v-stepper-content>
			</v-stepper>

			<div v-show="!incomplete">
				It appears you may have already set up you domain. If this is a mistake, please  reload the page and start again
				<v-btn href="">
					Reload
				</v-btn>
			</div>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="error lighten-1" text	@click="resetAndClose">
					Close
				</v-btn>

				<v-spacer></v-spacer>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		data () {
			return {
				buyDialog: false,
				stage : 1,
				incomplete : true
			}
		},

		methods:{
			resetAndClose(){
				this.buyDialog = false
			},

			checkout(){
				this.incomplete = true
				this.buyDialog = false
				this.$emit('completed')
			}
		}
	}
</script>