<template>
	<v-card tile flat color="transparent" max-width="1200" class="mx-auto d-flex" min-height="100vh">
		<v-row class="my-auto">
			<v-col cols="12" md="6" lg="7" class="my-auto  d-none d-md-flex">
				<v-card max-width="550" class="mx-auto" color="transparent" tile flat>
					<h1 class="font-weight-bold mb-2">
						One email solution for the entire 
					</h1>
					<p class="grey--text text--lighten-1">
						Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Maxime deserunt necessitatibus quos eaque laudantium eligendi, deleniti temporibus quia omnis, in hic? Quos nobis quas debitis reprehenderit. Culpa molestiae, fuga quaerat!
					</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="6" lg="4" class="my-auto">
				<v-card outlined  class="mx-auto rounded-lg" max-width="450" :loading="loading">
					<v-form class="pa-4 pa-md-6" @submit.prevent="register"  ref="authRegister" v-model="valid" lazy-validation :disabled="loading">

						<v-row>
							<v-col cols="12">
								<div class="d-flex flex-column">
									<nuxt-link :to="{name: 'index'}" class="mx-auto">
										<app-logo></app-logo>
									</nuxt-link>
									<h3 class="text-center mt-4 font-weight-bold">
										Get Started
									</h3>

								</div>
							</v-col>

							<v-col cols="12" v-show="failed.status">
								<v-alert border="left" color="red" icon="mdi-account" type="success">
									{{failed.reason}}
								</v-alert>
							</v-col>

							<v-col cols="12" md="6">
								<v-text-field dense color="grey darken-2" class="caption" hide-details="auto" label="First Name" outlined type="text" @focus="resetValidation" required v-model="regForm.first_name" :rules="[rules.first_name.required]">
								</v-text-field>
							</v-col>

							<v-col cols="12" md="6">
								<v-text-field dense color="grey darken-2" class="caption" hide-details="auto" label="Last Name" outlined type="text" @focus="resetValidation" required v-model="regForm.last_name" :rules="[rules.last_name.required]">
								</v-text-field>
							</v-col>


							<v-col cols="12">
								<v-text-field dense color="grey darken-2" class="caption" hide-details="auto" label="Username" type="text" outlined @focus="resetValidation" required v-model="regForm.username" :rules="[rules.username.required]" :suffix="`${$tld}`">
								</v-text-field>
							</v-col>


							<v-col cols="12">
								<v-text-field dense color="grey darken-2" class="caption" hide-details="auto" label="Password" outlined :type="field" @focus="resetValidation" required v-model="regForm.password" :rules="[rules.password.required, rules.password.min]" :append-icon="field === 'password' ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" @click:append="field === 'password' ? field = 'text' : field = 'password'">
								</v-text-field>
							</v-col>

					<!-- 		<v-col cols="12" md="6">
								<v-text-field dense color="grey darken-2" class="caption" hide-details="auto" label="Confirm" outlined type="password" @focus="resetValidation" required v-model="passwordConfirm" :rules="[rules.passwordMatch.required, rules.passwordMatch.match]">
								</v-text-field>
							</v-col> -->

							<v-col cols="12">
								<v-btn depressed large color="primary" type="submit" :loading="loading">
									<span class="text-capitalize px-5">
										next
									</span>
								</v-btn>
							</v-col>


							<v-col cols="12">
								<v-divider></v-divider>
							</v-col>

							<v-col cols="12">
								<p class="grey--text caption">
									Already have an account?
								</p>
								<div class="d-flex">
									<v-btn color="grey darken-3" depressed :to="{name: 'login'}" nuxt>
										<span class="caption text-capitalize px-2">
											Log In
										</span>
									</v-btn>
									<v-spacer></v-spacer>
								</div>

							</v-col>
						</v-row>
					</v-form>

				</v-card>
			</v-col>
		</v-row>
	</v-card>
</template>
<script>
	import {base, signUp} from "@/processes/auth"
	export default {
		layout: 'auth',
		middleware: ['guest'],
		mixins: [base, signUp],
		head(){
			return{
				title: `Sign Up`
			}
		}
	};
</script>

