<template>
	<v-card color="transparent" tile flat max-width="500" class="mx-auto">
		<slot name="explanation"></slot>

		<v-expand-transition class="transparent">
			<v-row v-show="hasDomain">
				<v-col cols="12">
					<v-text-field label="Enter your domain" placeholder="Eg. example.com" autofocus outlined hide-details="auto" v-model="domainInfo.domain" ref="domainInput" :rules="[rules.domain.required, rules.domain.isValidDomain]" :error-messages="domainErrors"></v-text-field>
				</v-col>
			</v-row>

		</v-expand-transition>

		<div v-show="!hasDomain">
			<v-btn outlined x-large block color="grey darken-3" class="dark" @click="hasDomain = true">
				<v-icon left class="success rounded-circle" small>
					mdi-check
				</v-icon>
				<span class="text-caption grey--text">
					I have a domain
				</span>
			</v-btn>
			<v-spacer class="my-5"></v-spacer>
			<domain-acquisition @next="$emit('done')"></domain-acquisition>
		</div>
		<v-divider class="my-5"></v-divider>
		<v-card-actions class="flex-wrap">
			<v-spacer></v-spacer>
			<v-btn color="grey" depressed :large="$vuetify.breakpoint.mdAndUp" rounded  @click="goback" class="mb-1">
				<span class="text-small text-capitalize px-1 px-md-5">
					Back
				</span>
			</v-btn>
			<v-btn color="grey darken-4" depressed :large="$vuetify.breakpoint.mdAndUp" rounded  @click="hasDomain = !hasDomain" v-show="hasDomain" class="mb-1">
				<span class="text-small text-capitalize px-1 px-md-5">
					Cancel
				</span>
			</v-btn>

			<!-- <v-spacer class="d-flex d-md-none"></v-spacer> -->
			
			<v-btn color="primary" depressed :large="$vuetify.breakpoint.mdAndUp" rounded  @click="setupDomain" v-show="canProceed" class="mb-1" :loading="loading">
				<span class="caption font-weight-bold text-capitalize px-1 px-md-5">
					Save & Continue
				</span>
			</v-btn>
			<v-spacer></v-spacer>
		</v-card-actions>
	</v-card>
</template>
<script>
	export default {

		data(){
			return{
				valid : true,
				loading : false,
				hasDomain : false,
				domainAcquired : false,
				domainErrors: '',
				domainInfo:{
					domain : ''
				},

				rules:{
					domain :{
						required : value => !!value || 'A domain is required for this process',
						isValidDomain : value => {
							const pattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/
							return pattern.test(value) || 'Enter valid domain'
						}
					}
				}
			}
		},

		methods:{

			goback(){
				this.hasDomain = false
				this.$emit('back')
			},

			async setupDomain(){
				this.domainErrors = null
				this.valid = await this.$refs.domainInput.validate(true)

				if (!this.valid) {
					return
				}

				this.loading = true
				
				let form = new FormData();
				form.append('account', this.$auth.user.email)
				form.append('domain', this.domainInfo.domain)
				await this.$axios.$post(`${this.$config.BASEURL}/domain/`, form).then(res=>{
					this.hasDomain = false
					this.loading = false
					this.$emit('done')
				}).catch(err=>{
					if (err.response.data && err.response.data.domain) { this.domainErrors = err.response.data.domain } 
						this.loading = false
				})



			}
		},

		computed:{
			canProceed(){
				return (this.hasDomain || this.domainAcquired) && this.domainInfo.domain ? true : false
			}
		}
	};
</script>
