<template>
  <v-app dark>

    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant"  :clipped="clipped" fixed app  color="black" dark mini-variant-width="65" width="220" class="pa-0">
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
        <v-list-item class="white" :ripple="true" @click.stop="compose = !compose">
          <v-list-item-action>
            <v-img src="/compose.png" contain max-width="20" alt="App Logo"/>
          </v-list-item-action>
          <v-list-item-content class="ml-n4">
            <v-list-item-title class="black--text">Compose</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <settings-sidebar></settings-sidebar>
    </v-navigation-drawer>
    <top-navigation :toggle="toggle" @minify="miniVariant = !miniVariant" @draw="drawer = !drawer"></top-navigation>
    <v-main>
      <v-container>
       <notifier/>
       <nuxt />
     </v-container>

   </v-main>
   <v-card class="ml-auto pa-5" max-width="450" color="transparent" flat tile v-if="compose">
    <v-card flat tile class="rounded-t-lg">
      <v-system-bar  color="grey darken-3" class="rounded-t-lg" :dark="isDark">
        <span>
          New Message
        </span>
        <v-spacer></v-spacer>
        <v-icon>mdi-window-minimize</v-icon>

        <v-icon>mdi-window-maximize</v-icon>

        <v-icon>mdi-close</v-icon>
      </v-system-bar>
      Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Molestias ratione accusantium tempore quia, distinctio exercitationem qui corrupti obcaecati possimus excepturi minima accusamus repellendus impedit maxime ipsum laboriosam consectetur praesentium harum.
    </v-card>
  </v-card>
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
        compose: false
      }
    },

    computed: {
      toggle(){
        return this.miniVariant
      }
    }
  }
</script>
