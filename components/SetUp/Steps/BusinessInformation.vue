<template>
	<v-card color="transparent" tile flat max-width="500" class="mx-auto" ref="businessInfo">

		<slot name="explanation"></slot>

		<v-row class="mt-4">
			<v-col cols="12">
				<v-text-field label="Name of Business / Brand" outlined hide-details="auto" ref="business_name" :rules="[rules.business_name.required]" v-model="businessInfo.business_name"></v-text-field>
			</v-col>



			<v-col cols="12">
				<v-autocomplete label="Industry" outlined hide-details="auto" :items="industries" ref="business_type" :rules="[rules.business_type.required]" v-model="businessInfo.business_type"></v-autocomplete>
			</v-col>


			<v-col cols="12" v-if="businessInfo.business_type === 'other'">
				<v-text-field label="Other Industry" outlined hide-details="auto" ref="other_industry" v-model="businessInfo.other_industry"></v-text-field>
			</v-col>

			<v-col cols="12">
				<v-autocomplete label="Country" outlined hide-details="auto" ref="country" :items="countries" v-model="businessInfo.country" :rules="[rules.country.required]"></v-autocomplete>
			</v-col>

			<v-col cols="12">
				<v-text-field label="Business Mobile Number" outlined hide-details="auto" ref="city" v-model="businessInfo.city" :rules="[rules.city.required]"></v-text-field>
			</v-col>
		</v-row>

		<v-divider class="my-5"></v-divider>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn color="primary" depressed large rounded  @click="saveBusinessInfo" :loading="loading">
				<span class="caption font-weight-bold text-capitalize px-5">
					Save & Continue
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
				businessInfo:{
					business_name : null,
					business_type : null,
					country: null,
					city: null,
					other_industry : null
				},

				rules: {
					business_type: {
						required : value => !!value || 'Please specify your industry.',
					},

					business_name: {
						required : value => !!value || 'Please enter the name of your brand / business.',
					},
					country : {
						required : value => !!value || 'Please select a country.',	
					},
					city : {
						required : value => !!value || 'Please specify your city.',
					}
				},

				industries : [
				{ text: 'Agriculture', value: 'agriculture'},
				{ text: 'Agency', value: 'agency'},
				{ text: 'Beauty / Fashion ', value: 'beauty-fasion'},
				{ text: 'Communications', value: 'communications'},
				{ text: 'Customer Service', value: 'customer-service'},
				{ text: 'Corporate', value: 'corporate'},
				{ text: 'Legal', value: 'legal'},
				{ text: 'Internet / Technology', value: 'internet'},
				{ text: 'Non Profits', value: 'non-profits'},
				{ text: 'Education', value: 'education'},
				{ text: 'Creative Media & Photography', value: 'creative-media-photography'},
				{ text: 'Food', value: 'food'},
				{ text: 'Service & Hospitatility', value: 'service-hospitality'},
				{ text: 'Other', value: 'other'},
				] 

			}
		},

		computed:{
			...mapGetters({
				countries : 'countries/all'
			})
		},

		methods:{

			validateInput(){
				Object.keys(this.businessInfo).forEach(f => {
					this.valid = this.$refs[f].validate(true)
				})
			},

			async saveBusinessInfo(){
			// console.log(this.valid)
			await this.validateInput()
			if (!this.valid) {
				return
			}
			let form = new FormData()
			Object.keys(this.businessInfo).forEach(item => {
				form.append(item, this.businessInfo[item])
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

		async baseCheck(){
			await Object.assign(this.businessInfo, this.$auth.user.business_info)
			let fail = await Object.values(this.businessInfo).some(value => { return value === null})
			if (!fail) {
				this.$emit('done')
			}
		}
	},

	mounted(){
		this.baseCheck()
	}

};
</script>