<template>
	<div class="d-flex flex-wrap">
		<v-spacer></v-spacer>
		<v-sheet v-for="c in clients" :key="c.name" max-width="150" class="ma-2 pa-4 d-flex"  color="transparent">
			<v-img :src="c.icon" contain width="80" class="ma-auto"></v-img>
		</v-sheet>
		<v-spacer></v-spacer>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters({
				clients: 'clients/clients'
			})
		}
	};
</script>
