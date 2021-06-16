<template>
	<v-btn icon @click= "hasHistory ? $router.go(-1) : $router.push('/')" >
		<v-icon>
			mdi-close
		</v-icon>
	</v-btn>
</template>
<script>
	export default {
		computed:{
			hasHistory(){
				return  window.history.length > 2
			}
		}
	};
</script>
