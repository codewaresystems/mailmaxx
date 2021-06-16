<template>
	<v-row>
		<v-col cols="10">
			<h2>
				Administrators
			</h2>
			<p class="text-small grey--text">
				Create and manage administrators for this domain
			</p>
		</v-col>
		<!-- <template v-if="mailboxes.length > 0">
			<v-col cols="12" sm="6" md="4" xl="3" v-for="(mailbox, key) in mailboxes" :key="key">
				<mailbox :mailbox="mailbox"></mailbox>
			</v-col>
		</template>

		<template v-else>
			<v-col cols="12">
				<v-card max-width="450" til flat class="pa-4" dark outlined>
					Nothing here yet
				</v-card>
			</v-col>
		</template> -->
	</v-row>
</template>
<script>
	export default {

	};
</script>

</template>
<script>
	export default {

		props:{
			domain:{
				required : true
			}
		}

	};
</script>
