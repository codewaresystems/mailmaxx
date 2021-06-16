<template>
	<div>
		<v-sheet color="transparent" class="d-flex flex-column ma-2 ma-md-4">
			<v-avatar class="rounded-circle d-flex ma-auto flex-column" color="error darken-1" :size="$vuetify.breakpoint.smAndDown ? 40 : 60">
				<v-icon class="ma-auto" :size="$vuetify.breakpoint.smAndDown ? 20 : 35" dark>
					mdi-book-account
				</v-icon>

			</v-avatar>
		</v-sheet>

		<v-sheet color="transparent" class="d-flex flex-column ma-2 ma-md-4">
			<v-avatar class="rounded-circle d-flex ma-auto flex-column" color="primary" :size="$vuetify.breakpoint.smAndDown ? 40 : 60">
				<v-icon class="ma-auto" :size="$vuetify.breakpoint.smAndDown ? 20 : 35" dark>
					mdi-format-list-text
				</v-icon>
				
			</v-avatar>
		</v-sheet>


		<v-sheet color="transparent" class="d-flex flex-column ma-2 ma-md-4">
			<v-avatar class="rounded-circle d-flex ma-auto flex-column" color="success darken-2" :size="$vuetify.breakpoint.smAndDown ? 40 : 60">
				<v-icon class="ma-auto" :size="$vuetify.breakpoint.smAndDown ? 20 : 35" dark>
					mdi-sticker-emoji
				</v-icon>
				
			</v-avatar>
		</v-sheet>


		<v-sheet color="transparent" class="d-flex flex-column ma-2 ma-md-4">
			<v-avatar class="rounded-circle d-flex ma-auto flex-column" color="amber darken-3" :size="$vuetify.breakpoint.smAndDown ? 40 : 60">
				<v-icon class="ma-auto" :size="$vuetify.breakpoint.smAndDown ? 20 : 35" dark>
					mdi-clock-time-eight-outline
				</v-icon>
				
			</v-avatar>
		</v-sheet>
		<v-spacer></v-spacer>
	</div>
</template>
<script>
	export default {

	};
</script>
