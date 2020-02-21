<template>
   <nav
   class="nav w-screen z-20 text-white shadow-2xl bg-blue-600"
  >
    <div class="left">
        <span class="font-bold text-3xl ">
            GroupCodingHub
      </span>
    </div>
    <div class="right">
      <router-link class="link" to="/">Home</router-link>|
      <router-link class="link" to="/login">login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped>
.nav {
  @apply h-24 fixed px-12 flex justify-between items-center;
}
.link {
  @apply px-2 font-semibold;
  &:hover {
    @apply text-yellow-500;
  }
}
</style>