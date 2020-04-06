<template>
  <div
    class="h-screen w-screen bg-cover bg-center"
    :style="`background-image: url(${bgImage})`"
    id="firebaseui-auth-container"
  ></div>
</template>

<script>
import bgImage from '../assets/bg.jpg'
export default {
  name: 'login',
  data() {
    return {
      bgImage
    }
  },
  mounted() {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: authResult => {
          this.$store.dispatch('setUser', authResult.user)
          this.$router.push('/')
          return false
        }
      },
      signInOptions: [
        this.$firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        this.$firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    this.$firebaseui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style lang="scss" scoped></style>
