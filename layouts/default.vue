<template>
  <v-app dark class="pa-0 ma-0">
    <default-navigation :toggle="toggle" @minify="miniVariant = !miniVariant" @draw="drawer = !drawer"></default-navigation>
    <v-main>
      <notifier/>
      <nuxt />
      <main-footer></main-footer>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data(){
      return{
       drawer: true
     }
   },
   computed: {
    toggle(){
      return this.miniVariant
    }
  }
}
</script>
