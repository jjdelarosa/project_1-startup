<template>
  <div>
    <NavBar />
      <div class="h-screen w-screen bg-blue-600 opacity-75" />
      <div
        class="absolute h-screen w-screen top-0 flex flex-col justify-center items-center"
      >
        <h1
          class="text-6xl font-bold text-white px-4 opacity-75"
        >
        GroupCodingHub
        </h1>
        <h3
          class="text-2xl font-bold text-white px-4 opacity-75"
        >
        A social network a place where you can share code and talk to one another and work together in projects and homework activities.
        </h3>
        <p  class="text-2xl font-bold text-white px-4 opacity-75">
          As a community of coders, I feel we will connect them to solution that enable productivity, growth, and discovery to your code.
          </p>
      </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>