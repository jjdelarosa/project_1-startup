<template>
  <nav class="flex bg-red-500 h-20 px-8 justify-between items-center">
    <div>
      <router-link to="/" class="logo font-blod text-xl tracking tight"
        >GroupCodingHub</router-link
      >
    </div>
    <div>
      <span v-if="user" class="font-blod"
        >Welcome <span class="font-normal">{{ user.displayName }}</span></span
      >
      <router-link
        v-if="!user"
        class="p-2 mx-1 hover:text-red-900 hover:bg-red-300"
        to="/login"
        >Login</router-link
      >
      <button
        v-if="user"
        class="p-2 mx-1 hover:text-red-900 hover:bg-red-300"
        @click="logOut"
      >
        Logout
      </button>
      <router-link
        v-if="user"
        class="p-2 mx-1 hover:text-red-900 hover:bg-red-300"
        to="/news feed"
        >News Feed</router-link
      >
      <router-link
        v-if="user"
        class="p-2 mx-1 text-white hover:text-red-900 hover:bg-red-300"
        to="/messages"
        >Messages</router-link
      >
      <router-link
        v-if="user"
        class="p-2 mx-1 text-white hover:text-red-900 hover:bg-red-300"
        to="/create"
        >Create Code
      </router-link>

      <router-link
        v-if="user"
        class="p-2 mx-1 text-white hover:text-red-900 hover:bg-red-300"
        to="/profile"
        >Profile</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  },
  methods: {
    logOut() {
      this.$firebase.auth().signOut()
      this.$store.dispatch('setUser', '')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
:not(.logo).router-link-exact-active {
  @apply font-bold bg-red-300;
}
</style>
