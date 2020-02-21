<template>
  <div>
    <NavBar />
    <div
      class="pt-24 min-h-screen w-screen top flex flex-col flex-wrap justify-center items-center px-8 bg-blue-600 shadow-lg"
    >
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  name: 'login',
  components: {
    NavBar,
  }
}
</script>

<style lang="scss" scoped></style>