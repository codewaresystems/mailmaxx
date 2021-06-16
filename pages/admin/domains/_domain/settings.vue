<template>
	<v-row>
		<v-col cols="12">
			<h2>
				DNS Manager
			</h2>
			<p class="text-small grey--text mt-1">
				Configure DNS Settings for {{ domain.domain }}
			</p>

		</v-col>
		<template v-if="domain.is_hosting">

			<v-col cols="12" class="mt-0 pt-0">
				<v-data-table v-model="selected" :headers="headers" :items="hostRecords" :single-select="singleSelect" item-key="id" show-select class="elevation-0" :items-per-page="hostRecords.length+1" hide-default-footer>
					<template v-slot:top>
						<v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
					</template>

					<template v-slot:item.answer="{item}">
						<v-sheet tile flat color="transparent" max-width="350">
							{{ item.answer | truncate(40)}}
						</v-sheet>
					</template>

					<template v-slot:item.actions="{ data }">
						<v-btn icon small @click="editItem(data)">
							<v-icon small>
								mdi-pencil-outline
							</v-icon>
						</v-btn>
						<v-btn icon color="error lighten-2" small @click="deleteItem(data)">
							<v-icon small>
								mdi-delete
							</v-icon>
						</v-btn>
					</template>
				</v-data-table>


			</v-col>
			<v-col cols="12">
				<v-card flat class="pa-2 pa-md-4" outlined>
					<form ref="addDnsRecordForm" @submit.prevent="addDnsRecord" :disabled="loading">
						<v-row>
							<v-col cols="2">
								<v-select dense solo outlined label="Type" :items="types" hide-details="auto" required v-model="record.type" :rules="[() => !!record.type || 'This field is required']"></v-select>
							</v-col>
							<v-col cols="3">
								<v-text-field dense solo outlined label="Host" hide-details="auto" required v-model="record.host" :rules="[() => !!record.host || 'This field is required']"></v-text-field>
							</v-col>

							<v-col cols="3">
								<v-textarea dense solo outlined label="Answer / Value" auto-grow rows="1" hide-details="auto" required v-model="record.answer" :rules="[() => !!record.answer || 'This field is required']"></v-textarea>
							</v-col>

							<v-col cols="2">
								<v-text-field dense solo outlined label="TTL" hide-details="auto" required v-model="record.ttl" :rules="[() => !!record.ttl || 'This field is required']"></v-text-field>
							</v-col>


							<v-col cols="2" class="my-auto">
								<v-btn color="primary" depressed type="submit" :loading="loading">
									<span class="caption text-capitalize font-weight-bold">
										Add Record
									</span>
								</v-btn>
							</v-col>
						</v-row>
					</form>
				</v-card>
			</v-col>
		</template>

		<template v-else>
			<v-col cols="12" class="pt-0 mt-0">
				<v-card outlined class="py-4 pa-2 pa-md-4 pa-lg-6 rounded" max-width="700">
					<div class="d-flex flex-column flex-md-row">
						<v-icon size="60" class="my-auto mr-auto">
							mdi-lock
						</v-icon>
						<div class="py-2 py-md-0 px-2 px-md-4">
							<h2 class="font-weight-bold">
								Action Locked
							</h2>
							<p class="caption mt-1">
								DNS manager is locked because your domain is not managed by us. Visit your host provider to manage your DNS settings or transfer your domain to us.
							</p>
						</div>
					</div>
				</v-card>
			</v-col>
		</template>


		<v-col cols="12">
			<v-dialog v-model="dialog">
				<v-card tile max-width="450" class="mx-auto">
					{{theRecord}}
				</v-card>
			</v-dialog>
		</v-col>
	</v-row>
</template>
<script>
	import { listRecords , bindProps , addRecord} from '@/processes/domains/dns'
	export default {
		props:{
			domain:{
				required : true
			}
		},
		mixins : [ listRecords , bindProps , addRecord],

		async mounted(){
			if (this.domain.is_hosting) {
				await this.getHostRecords( this.domain.domain );
			}
		},
		data () {
			return {
				dialog: false,
				singleSelect: false,
				selected: [],
				theRecord : {},
				headers: [
				{text: 'Type', align: 'start', sortable: false, value: 'type'},
				{ text: 'Host', sortable: false, value: 'host' },
				{ text: 'Answer', sortable: false, value: 'answer' },
				{ text: 'TTL', sortable: false, value: 'ttl' },
				{ text: 'Actions', sortable: false, value: 'actions' },
				],
			}
		},

		methods : {
			editItem(data){
				// this.theRecord = data
				// this.dialog = true
				// console.log(data)
				alert(data)
			},
			deleteItem(item){
				alert(item)
			}
		}

	};
</script>
