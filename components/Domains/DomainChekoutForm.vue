<template>
	<div>
		<v-row no-gutters>
			<v-col cols="12">
				<v-tabs v-model="paymentMethod" grow>
					<v-tab key="momo">
						<span class="caption font-weight-bold">
							Mobile Money
						</span>
					</v-tab>
					<v-tab key="card">
						<span class="caption font-weight-bold">
							Card
						</span>
					</v-tab>
				</v-tabs>
			</v-col>
			<v-col cols="12" class="my-2">
				<v-tabs-items v-model="paymentMethod" class="transparent">

					<v-tab-item key="momo" class="transparent">
						<v-row>
							<v-col cols="12">
								<span class="caption mb-2 grey--text" v-show="mobile.length > 0">
									Enter Mobile Number
								</span>
								<vue-tel-input v-model="mobile"></vue-tel-input>
								
							</v-col>

							<v-col cols="12">
								<v-select :items="[{text: 'MTN', value: 'mtn'}, {text: 'Vodafone', value: 'vod'}, {text: 'AirtelTigo', value: 'tgo'}]" v-model="provider" outlined label="Select Provider" hide-details="auto"></v-select>
							</v-col>

							<v-col cols="12">
								<v-btn color="primary" @click.prevent="initiateMomoPayment" :loading="loading">
									<span class="caption font-weight-bold text-capitalize">
										Process Payment
									</span>
								</v-btn>
							</v-col>
						</v-row>


						
					</v-tab-item>

					<v-tab-item key="card" class="transparent">
						<v-btn color="primary" @click.prevent="payWithCard" :loading="loading">
							<span class="caption font-weight-bold text-capitalize">
								Process Payment
							</span>
						</v-btn>
					</v-tab-item>
				</v-tabs-items>
			</v-col>
		</v-row>

		<v-dialog v-model="otpRequired" persistent>
			<v-card dark flat class="pa-4 pa-md-8 mx-auto rounded-lg" max-width="550">
				<h3>
					Authorize Payment
				</h3>
				<p class="text-small grey--text">
					Enter the token sent to {{mobile}} to proceed.
				</p>

				<v-text-field hide-details="auto" label="Enter Token" outlined color="primary" v-model="otpCode"></v-text-field>

				<v-btn color="primary" depressed class="mt-3" @click.prevent="verifyOTP" :loading="loading">
					<span class="caption text-capitalize font-weight-bold px-5">
						Verify
					</span>
				</v-btn>
			</v-card>
		</v-dialog>



		<v-dialog v-model="momoPrompt" persistent>
			<v-card dark flat class="pa-4 pa-md-8 mx-auto rounded-lg" max-width="550">
				<h3>
					Confirm payment
				</h3>
				<p class="text-small grey--text">
					A payment prompt has been sent to {{mobile}}. Please confirm to proceed.
				</p>

				<v-btn color="primary" depressed class="mt-3" to="/admin/billing">
					<span class="caption text-capitalize font-weight-bold px-5">
						Complete
					</span>
				</v-btn>
			</v-card>
		</v-dialog>
	</div>
</template>
<script>
	import {setupNewDomain} from "@/processes/domains/setup"
	export default {
		mixins:[setupNewDomain],
		props:{
			theDomainObject:{
				type : Object,
				required : true
			}
		},

		data(){
			return{
				paymentMethod : 'momo',
				mobile: '',
				provider: ''
			}
		}

	};
</script>
