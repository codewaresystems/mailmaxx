<template>

</template>
<script>
	export default {
		head(){
			return{
				title: ``
			}
		},

		mounted(){
			this.$auth.logout()
		}
	};
</script>


