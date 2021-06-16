<template>
  <div>
    <v-stepper v-model="step" dark class="bg-default elevation-0">
      <v-stepper-items>
        <v-stepper-content step="1" class="transparent pa-0">
          <business-information @done="step = 2">
            <template slot="explanation">
              <!-- <v-img max-width="150" class="rounded-t-xl mx-auto" src="/start.png"/> -->
              <h3 class="text-center">
                Business Info
              </h3>

              <p  class="text-center grey--text text--lighten-1 mt-2 card-subtitle">
                Set up your business information
              </p>
            </template>
          </business-information>
        </v-stepper-content>


        <v-stepper-content step="2" class="transparent pa-0">
          <domain-setup @done="step = 3" @back="step = 1">
            <template slot="explanation">
              <!-- <v-img max-width="150" class="rounded-t-xl mx-auto" src="/start.png"/> -->
              <h3 class="text-center">
                Domain Setup
              </h3>

              <p  class="text-center grey--text text--lighten-1 mt-2 card-subtitle">
                Set up your domain. A custom domain sets you apart and make you appear more professional. 
              </p>
            </template>
          </domain-setup>
        </v-stepper-content>

        <v-stepper-content step="3" class="transparent pa-0">
          <backup-information @done="">
           <template slot="explanation">
            <!-- <v-img max-width="150" class="rounded-t-xl mx-auto" src="/start.png"/> -->
            <h3 class="text-center">
              Contact Information
            </h3>

            <p  class="text-center grey--text text--lighten-1 mt-2 card-subtitle">
              Set up recovery / contact information for your account
            </p>
          </template>
        </backup-information>
      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>

  <v-dialog
  v-model="dialog" persistent  max-width="350">
  <v-card>
    <v-card-title class="headline">
     Awesome
   </v-card-title>
   <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
   <v-card-actions>
    <v-spacer></v-spacer>

    <v-btn color="green darken-1" text  @click="finalize">
      Go to mailbox
    </v-btn>
  </v-card-actions>
</v-card>
</v-dialog>
</div>
</template>

<script>
  export default {
    data () {
      return {
        step: 1,
        dialog : false  
      }
    },

    methods:{
      finalize(){
        this.dialog = false; 
        this.$router.push({name: 'm-box', params:{box: 'inbox'}})
      }
    }
  }
</script>

<style>
.bg-default{
  background-color: #121212 !important;
}
</style>