<template>
	<v-card flat tile color="transparent">
		<h3>
			Add An Exisiting Domain
		</h3>
		<v-form class="mt-3"@submit.prevent="setUp" ref="existingDomainForm">
			<v-row>
				<v-col cols="12">
					<v-text-field v-model="domain" outlined hide-details="auto" required ref="domainInput" :rules="[rules.domain.required , rules.domain.isValidDomain ]" label="Enter Domain Name" :error-messages="domainErrors"></v-text-field>
				</v-col>
				<v-col cols="12">
					<v-divider></v-divider>
				</v-col>

				<v-col cols="12">
					<slot name="actions"></slot>

					<v-btn large color="primary" depressed :loading="loading" type="submit">
						<span class="text-capitalize caption font-weight-bold">
							Add Domain
						</span>
					</v-btn>
				</v-col>
			</v-row>
		</v-form>

	</v-card>
</template>
<script>
	import {base , setupExistingDomain} from "@/processes/domains/setup"
	export default {

		mixins : [ base, setupExistingDomain ]

	};
</script>
