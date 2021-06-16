<template>
	<v-card flat tile color="transparent">
		<h3 class="white--text" :class="available ? 'font-weight-light' : 'text-small'">
			{{ available ? `${domain} is available for registration at ${domainObject.purchasePrice } / year` : 'Acquire a new domain' }}
		</h3>


		<v-form class="mt-3"@submit.prevent="checkAvailability" ref="existingDomainForm" v-if="!available">
			<v-row>
				<v-col cols="12">
					<v-text-field v-model="domain" outlined hide-details="auto" required ref="domainInput" :rules="[rules.domain.required , rules.domain.isValidDomain ]" label="Enter Preferred Domain Name" :error-messages="domainErrors"></v-text-field>
				</v-col>
				<v-col cols="12">
					<v-divider></v-divider>
				</v-col>

				<v-col cols="12">
					<slot name="actions"></slot>

					<v-btn large color="primary" depressed :loading="loading" type="submit">
						<span class="text-capitalize caption font-weight-bold">
							Check  Availability
						</span>
					</v-btn>
				</v-col>
			</v-row>
		</v-form>

		<div v-if="available" class="mt-5">
			<h1>
				<span class="display-2 font-weight-bold">
					${{domainObject.purchasePrice}}
				</span>
				<span>
					/ year
				</span>
			</h1>
<!-- 
			<p class="caption grey--text">
				{{domain}} is available for registration at 
				<span class="font-weight-bold">
					{{domainObject.purchasePrice}} / year
				</span>
			</p> -->

			<v-chip class="mt-4">
				<span class="caption">
					Renews at ${{ domainObject.renewalPrice }} / year
				</span>
			</v-chip>

			<v-divider class="my-4"></v-divider>
			<div v-show="!proceed">
				<slot name="actions"></slot>
				<v-btn large color="primary" depressed>
					<span class="text-capitalize caption font-weight-bold" @click="proceed = true">
						Proceed to buy
					</span>
				</v-btn>
			</div>
			<domain-chekout-form v-if="proceed" :key="proceed" :theDomainObject="domainObject"></domain-chekout-form>
		</div>
	</v-card>
</template>
<script>
	import {base , setupNewDomain} from "@/processes/domains/setup"
	export default {

		mixins : [ base, setupNewDomain ]

	};
</script>
