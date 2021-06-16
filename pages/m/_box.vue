<template>
	<v-row justify="center" align="center">
		<v-col cols="12"">
			{{$auth.user}}
		</v-col>
	</v-row>
</template>
<script>
	export default {
		head(){
			return{
				title: `${this.$route.params.box.charAt(0).toUpperCase() + this.$route.params.box.slice(1)}`
			}
		}
	};
</script>


