<template>
	<v-app dark>

		<v-navigation-drawer v-model="drawer" :mini-variant="miniVariant"  :clipped="clipped" fixed app color="black" dark mini-variant-width="65" width="220" class="pa-0">
			<v-list class="py-5" :class="miniVariant ? 'px-1' : 'px-5'" color="transparent" rounded>
				<v-list-item class="mb-3 mt-n4 d-flex d-md-none">
					<v-btn class="d-flex d-md-none" icon @click.stop="miniVariant = !miniVariant">
						<v-icon>
							{{ miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left' }}
						</v-icon>
					</v-btn>
					<v-list-item-content>
						<v-list-item-title>Collapse</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<admin-sidebar></admin-sidebar>
		</v-navigation-drawer>
		<admin-navigation :toggle="toggle" @minify="miniVariant = !miniVariant" @draw="drawer = !drawer"></admin-navigation>
		<v-main>
			<notifier/>
			<v-container>
				<nuxt />
			</v-container>

		</v-main>
	</v-app>
</template>

<script>
	export default {
		middleware: ['auth'],
		data () {
			return {
				clipped: true,
				drawer: true,
				miniVariant: false,
			}
		},

		computed: {
			toggle(){
				return this.miniVariant
			}
		}
	}
</script>
