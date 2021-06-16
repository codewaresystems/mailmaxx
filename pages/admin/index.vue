<template>
	<div>
		<div class="d-flex flex-wrap">
			<v-card :width="$vuetify.breakpoint.smAndDown ? 160 : 200" :to="{name: 'admin-domains'}" class="ma-1 ma-md-3 pa-2 pa-md-3 d-flex flex-wrap" outlined>
				<v-icon class="mr-3 rosh rounded-circle pa-2" :size="$vuetify.breakpoint.smAndDown ? 20 : 30" color="greeny" dark>
					mdi-vector-link
				</v-icon>
				<span class="my-auto font-weight-bold">
					Domains
				</span>
			</v-card>
		</div>
	</div>
</template>
<script>
	export default {
		head(){
			return{
				title: ``
			}
		}
	};
</script>

