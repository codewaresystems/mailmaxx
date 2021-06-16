<template>
	<v-card max-width="500" class="mx-auto rounded-xl d-flex flex-column py-3 py-lg-16 px-4" flat color="transparent" min-height="90vh">
		<div class="mb-auto">
			<v-img max-width="200" class="rounded-t-xl mx-auto" src="/start.png"  v-if="!start"/>
			<div class="pa-6 d-flex flex-column" v-if="!start">
				<h2 class="text-center">
					Welcome  to {{`${$appName}, ${$auth.user.first_name}`}}
				</h2>
				<h4 class="text-center my-3 grey--text text--lighten-1">
					Just a few more things to set configure and you'll be sending emails in no time
				</h4>
				<v-btn class="mx-auto mt-2" rounded large depressed color="primary" @click="start = true">
					<span class="caption font-weight-bold text-capitalize px-2">
						Let's do it.
					</span>
				</v-btn>
			</div>


			<v-expand-transition class="transparent">
				<lazy-new-customer-journey v-if="start"></lazy-new-customer-journey>
			</v-expand-transition>
		</div>
	</v-card>
</template>
<script>
	export default {
		middleware : ['auth'], //add profileNotComplete
		head(){
			return{
				title: ``,
			}
		},
		data(){
			return{

				start : false
			}
		}
	};
</script>

