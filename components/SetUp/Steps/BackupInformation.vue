<template>
	<v-card color="transparent" tile flat max-width="500" class="mx-auto" ref="backupInfo">

		<slot name="explanation"></slot>

		<v-row class="mt-4">
			<v-col cols="12">
				<v-text-field label="Alternative Email" outlined hide-details="auto" ref="email" :rules="[rules.email.required, rules.email.valid]" v-model="backupInfo.alternative_email"></v-text-field>
			</v-col>

			<v-col cols="12">
				<vue-tel-input v-model="backupInfo.mobile_number"/>
			</v-col>
		</v-row>

		<v-divider class="my-5"></v-divider>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn color="primary" depressed large rounded  @click="savebackupInfo" :loading="loading">
				<span class="caption font-weight-bold text-capitalize px-5">
					Save & Complete
				</span>
			</v-btn>
			<v-spacer></v-spacer>
		</v-card-actions>
	</v-card>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default {

		data(){
			return{
				loading : false,
				valid : true,
				backupInfo:{
					alternative_email : null,
					mobile_number: null,
				},

				rules: {
					email: {
						required : value => !!value || 'Please enter an email address',
						valid: value => {
							const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
							return pattern.test(value) || 'Enter valid email address'
						},
					}
				}
			}
		},

		methods:{

			validateInput(){
				this.valid = this.$refs.email.validate(true)
			},

			async savebackupInfo(){
				await this.validateInput()
				if (!this.valid) {
					return
				}
				let form = new FormData()
				Object.keys(this.backupInfo).forEach(item => {
					form.append(item, this.backupInfo[item])
				})

				this.loading = true
				await this.$axios.$patch(`${this.$config.BASEURL}/account/${this.$auth.user.email}/`, form).then(async res=>{
					await this.$store.dispatch('refreshUser')
					this.loading = false
					this.$emit('done')
				}).catch(err=>{
					this.loading = false
				})
			},

		},

	};
</script>
