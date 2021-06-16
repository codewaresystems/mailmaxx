<template>
	<v-card tile flat color="secondary">
		<div class="py-5 py-md-10">
			<v-card tile flat color="transparent px-4 py-5 py-md-10 pt-lg-16" max-width="1500" class="mx-auto" dark>
				<v-row>
					<v-col cols="12" md="6" class="my-auto">
						<v-sheet max-width="500" tile flat class="mx-auto" color="transparent">
							<h1 class="font-weight-bold display-2 text-capitalize">
								A Fast & secure email solution for the entire Business.
							</h1>
							<p class="my-4">
								Host your business emails on our first class email infrastructure.
							</p>

							<v-btn depressed color="primary" tile height="60" nuxt :to="{name: 'signup'}">
								<span class="text-capitalize px-5">
									Create an account
								</span>
							</v-btn>
						</v-sheet>
					</v-col>
					<v-col cols="12" md="6" class="my-auto d-none d-md-block">
						<v-img src="/VideoCall.svg"></v-img>
					</v-col>

					<v-col cols="12" md="8" class="mx-auto pb-0">
						<top-clients-list></top-clients-list>
					</v-col>
				</v-row>

			</v-card>
		</div>


		<div class="white py-5 py-md-16">
			<v-card tile flat color="transparent px-4" max-width="1300" class="mx-auto py-5 py-md-10 py-lg-16">
				<v-row>
					<v-col cols="12" md="4">
						<v-sheet max-width="500" tile flat class="mx-auto pa-4 pa-md-6" outlined>
							<v-sheet class="rounded-circle mb-2 mb-md-4">
								<v-img src="https://images.ctfassets.net/oqcgx0hzeqgm/dPuomdJYSzKPU4n3F18lM/cdcfe5acc187e96fcf49dff894f90e4d/features-fordevelopers__1___1_.svg" max-width="100"></v-img>
							</v-sheet>
							<h3 class="font-weight-bold text-capitalize">
								Bring your custom domain or get a new one.
							</h3>
							<p class="my-4">
								You can quickly and easily set up your business emails to use a custom domain 
								on {{$appName}} whether regardless of where you purchased your domain.
							</p>
						</v-sheet>
					</v-col>


					<v-col cols="12" md="4">
						<v-sheet max-width="500" tile flat class="mx-auto pa-4 pa-md-6" outlined>
							<v-sheet class="rounded-circle mb-2 mb-md-4">
								<v-img src="https://images.ctfassets.net/oqcgx0hzeqgm/dPuomdJYSzKPU4n3F18lM/cdcfe5acc187e96fcf49dff894f90e4d/features-fordevelopers__1___1_.svg" max-width="100"></v-img>
							</v-sheet>
							<h3 class="font-weight-bold text-capitalize">
								Packed with powerful features to help you do things quickly.
							</h3>
							<p class="my-4">
								Address Books, Distributions Lists, Email Scheduling, Reactions and more. {{$appName}} seeks to help you do more very quickly with our power features.
							</p>
						</v-sheet>
					</v-col>


					<v-col cols="12" md="4">

						<v-sheet max-width="500" tile flat class="mx-auto pa-4 pa-md-6" outlined>
							<v-sheet class="rounded-circle mb-2 mb-md-4">
								<v-img src="https://images.ctfassets.net/oqcgx0hzeqgm/dPuomdJYSzKPU4n3F18lM/cdcfe5acc187e96fcf49dff894f90e4d/features-fordevelopers__1___1_.svg" max-width="100"></v-img>
							</v-sheet>
							<h3 class="font-weight-bold text-capitalize">
								You're In Absolute Control
							</h3>
							<p class="my-4">
								From provisioning new employees with their custom mailboxes to creating and managing distriution lists, developer API Keys and more. We allow you to very granularly control everything.
							</p>
						</v-sheet>
					</v-col>

				</v-row>
			</v-card>
		</div>

		<div class="grey lighten-4">
			<v-card tile flat color="transparent px-4" max-width="1500" class="mx-auto">
				<v-row class="flex-wrap-reverse py-5 py-md-10">
					<v-col cols="12" class="my-auto">
						<v-img src="https://www.zohowebstatic.com/sites/default/files/mail/home/secure-email-hosting-desk.webp" max-height="600" contain></v-img>
					</v-col>

					<v-col cols="12" md="8" lg="7" class="py-3 py-md-10 my-auto mx-auto">
						<h1 class="font-weight-bold display-1 text-capitalize text-md-center">
							A Sleek and Modern Interface
						</h1>
						<p class="my-4 text-md-center">
							Get a distraction free sleek and modern interface for sending and receiving emails on the web, desktop and mobile devices. 
						</p>

						<div class="d-flex">
							<v-btn depressed color="primary" tile height="60" nuxt :to="{name: 'downloads'}" class="mx-auto">
								<span class="text-capitalize px-5">
									Downloads
								</span>
							</v-btn>
						</div>
					</v-col>

				</v-row>

			</v-card>
		</div>


<!-- 		<div class="py-5 py-md-10 secondary">
			<v-card tile flat color="transparent px-4" max-width="1500" class="mx-auto" dark>
				<v-row class="flex-wrap-reverse py-5 py-md-10">

					<v-col cols="12" md="6" class="my-auto ml-auto">
						<h1 class="font-weight-bold display-1 text-capitalize">
							Integrate your Digital Products seemlessly with our APIs at no additional cost.
						</h1>
						<p class="my-4">
							We expose a standard compliant RESTful API for your developers to integrate seemlessly into your digital products and platforms.  
						</p>
						<v-btn depressed color="primary" tile height="60" nuxt href="https://developer.mailmaxx.com">
							<span class="text-capitalize px-5">
								Read The Docs
							</span>
						</v-btn>
					</v-col>
					<v-col cols="12" md="6" lg="5" class="my-auto">
						<v-sheet max-width="450" class="mx-auto rounded-circle pa-4">
							<v-img src="/integrate.svg"></v-img>
						</v-sheet>
					</v-col>
				</v-row>

			</v-card>
		</div> -->

	</v-card>
</template>
<script>
	export default {
		middleware: ['guest'],
	}
</script>
