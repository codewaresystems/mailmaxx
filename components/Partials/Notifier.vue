<template>
  <v-snackbar class="dark" v-model="show" :color="color" outlined max-width="400px" bottom center  dark :timeout="timeout">
    <div class="d-flex w-100">
      <span class="text-small text-capitalize" :class="`${color.startsWith('error') ? 'error--text' : ''}`">
        {{ message }}
      </span>

      <v-spacer></v-spacer>
      <v-icon size="18" :class="`${color} my-auto rounded-circle`" dark>
        {{icon}}
      </v-icon>
    </div>
  </v-snackbar>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        message: '',
        color: '',
        timeout: 5000,
        icon : ''
      }
    },

    created () {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'toasts/showMessage') {
          this.message = state.toasts.content,
          this.color = state.toasts.color
          this.timeout = state.toasts.timeout
          this.icon = state.toasts.icon
          this.show = true    

        }
      })
    }
  }
</script>
<style>
.w-100{
  width: 100%;
}
</style>