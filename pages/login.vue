<template>
	<v-card tile flat color="transparent" max-width="1200" class="mx-auto d-flex" min-height="100vh">
		<v-row class="my-auto">
			<v-col cols="12" md="6" lg="7" class="my-auto d-none d-md-flex">
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
					<v-form class="pa-4 pa-md-6" @submit.prevent="loginUser"  ref="authLogin" v-model="valid" lazy-validation>


						<v-row>
							<v-col cols="12">
								<div class="d-flex flex-column">
									<nuxt-link :to="{name: 'index'}" class="mx-auto">
										<app-logo></app-logo>
									</nuxt-link>
									<h3 class="text-center mt-4 font-weight-bold">
										Sign In
									</h3>

								</div>
							</v-col>

							<v-col cols="12">
								<v-text-field color="grey darken-2" hide-details="auto" label="Email Address" outlined type="email" :rules="[rules.email.required, rules.email.valid]" v-model="email" @focus="resetValidation"></v-text-field>
							</v-col>

							<v-col cols="12">
								<v-text-field color="grey darken-2" hide-details="auto" label="Password" type="password" outlined :rules="[rules.password.required]" v-model="password"></v-text-field>

							</v-col>

							<v-col cols="12" class="d-flex">
								<v-btn depressed large color="primary" type="submit" :loading="loading">
									<span class="text-capitalize px-5">
										Sign In
									</span>
								</v-btn>
								<v-spacer></v-spacer>
								<v-btn color="grey" class="my-auto" text plain small :to="{name: 'recovery'}" nuxt>
									<span class="caption text-capitalize">
										Forgot Password?
									</span>
								</v-btn>
							</v-col>
							<v-col cols="12">
								<v-divider></v-divider>
							</v-col>
							<v-col cols="12">
								<p class="grey--text caption">
									Don't have an account? Sign up for a new account now.
								</p>
								<div class="d-flex">
									<v-btn color="grey darken-3" depressed :to="{name: 'signup'}" nuxt>
										<span class="caption text-capitalize px-2">
											Get Started
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
	import {base, login } from "@/processes/auth"
	export default {
		layout: 'auth',
		middleware: ['guest'],
		mixins:[ base , login],
		head(){
			return{
				title: `Login`
			}
		}
	};
</script>

