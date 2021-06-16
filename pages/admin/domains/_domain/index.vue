<template>
</template>
<script>
	export default {

		props:{
			domain:{
				required : true
			}
		},

		mounted(){
			this.$router.push({
				name: 'admin-domains-domain-mailboxes',
				params:{
					domain : this.domain.domain
				}
			})
		}

	};
</script>
