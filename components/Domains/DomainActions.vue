<template>
	<v-menu	v-model="menu" :close-on-content-click="false" :nudge-width="200" nudge-right >
		<template v-slot:activator="{ on, attrs }">
			<v-btn icon color="default" dark v-bind="attrs" v-on="on">
				<v-icon>mdi-plus-circle</v-icon>
			</v-btn>
		</template>

		<v-card>
			<v-list dense>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							Quick Actions 
						</v-list-item-title>
					</v-list-item-content>


				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-list dense>
				<v-list-item>
					<v-list-item-icon>
						<v-icon>
							mdi-inbox
						</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title class="caption">
							New Mailbox
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>

		</v-card>
	</v-menu>
</template>
<script>
	export default {
		data(){
			return{
				menu : false
			}
		}
	};
</script>
