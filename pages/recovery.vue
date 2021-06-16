<template>
	<v-card tile flat dark color="transparent" class="d-flex flex-column pa-2 pa-md-6 pa-lg-12 pa-xl-16" min-height="90vh">
		<v-card outlined  dark class="ma-auto pa-4 pa-md-6 rounded-lg" max-width="400">
			<v-row>
				<v-col cols="12">
					<div class="d-flex">
						<v-spacer></v-spacer>
						<div class="d-flex flex-column">
							<nuxt-link :to="{name: 'index'}" class="mx-auto">
								<app-logo></app-logo>
							</nuxt-link>
							<h3 class="text-center mt-2">
								Account recovery	
							</h3>
							<p class="text-center grey--text caption">
								Enter your email address to recover your password.
							</p>
						</div>
						<v-spacer></v-spacer>
					</div>
				</v-col>

				<v-col cols="12">
					<v-text-field color="grey darken-2" hide-details="auto" label="Email Address" outlined type="email"></v-text-field>
				</v-col>

				<v-col cols="12">
					<v-btn depressed large color="primary">
						<span class="text-capitalize px-5">
							Next
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
			
		</v-card>
	</v-card>
</template>
<script>
	export default {
		layout: 'auth',
		middleware: ['guest'],
		head(){
			return{
				title: `Account Recovery`
			}
		}
	};
</script>

