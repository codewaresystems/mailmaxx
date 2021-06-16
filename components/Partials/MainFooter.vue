		<template>
			<v-card color="secondary" tile flat>
				<v-card max-width="1500" class="mx-auto d-flex py-5" dark tile flat color="transparent">
					<app-logo class="my-auto"></app-logo>
					<v-spacer></v-spacer>
					<div class="d-flex my-auto">
						<v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
							<v-icon size="24px">
								{{ icon }}
							</v-icon>
						</v-btn>
					</div>
					<v-spacer></v-spacer>
					<div class="my-auto">
						Sales@intu.co
					</div>
					<v-spacer></v-spacer>
				</v-card>
				<v-divider class="my-3"></v-divider>
				<v-card max-width="1400"  class="mx-auto d-flex py-5" tile flat color="transparent">
					<v-row>
						<v-col cols="12" md="6" lg="3">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nesciunt omnis laudantium vitae eligendi nostrum sequi ea qui adipisci in, ad delectus eaque eum quaerat dolore neque placeat, libero id!
						</v-col>
						<v-col cols="12" md="6" lg="3">
						Dicta excepturi suscipit accusantium? Fuga voluptatum neque amet quod eos, omnis tempora in fugiat repellat vitae natus vero doloremque dicta commodi cum, non beatae repudiandae nobis quos, aut saepe quibusdam.</v-col>
						<v-col cols="12" md="6" lg="3">
							Numquam facilis, quaerat iusto voluptates blanditiis placeat, consectetur eum dolorem suscipit dicta doloribus atque reiciendis, minus dolorum corporis ab. Debitis maiores itaque quisquam rem laboriosam dolorum reiciendis, repellendus, exercitationem magni.
						</v-col>
						<v-col cols="12" md="6" lg="3">
							Ullam assumenda accusamus reprehenderit totam. Minus voluptas minima distinctio suscipit porro vitae exercitationem magnam quas, dolor tempora maxime quos commodi enim officia, repellendus magni, obcaecati corrupti similique neque dolores expedita!
						</v-col>
					</v-row>
				</v-card>
			</v-card>
		</template>
		<script>
			export default {
				data(){
					return{
						icons: [
						'mdi-home',
						'mdi-email',
						'mdi-calendar',
						'mdi-delete',
						],
					}
				}
			};
		</script>
