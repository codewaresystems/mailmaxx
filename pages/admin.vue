<template>
	<v-card max-width="1400" til flat color="transparent" class="pa-0 pa-md-6 mx-auto">
		<nuxt-child />
	</v-card>
</template>
<script>
	export default {
		middleware: ['auth'],
		layout: 'admin'
	};
</script>

