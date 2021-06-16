<template>
	<nuxt-child />
</template>
<script>
	export default {
		middleware: ['auth'],
		layout: 'mailbox'
	};
</script>

