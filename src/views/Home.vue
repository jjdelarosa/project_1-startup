<template>
  <div>
    <div
      class="pt-24 min-h-screen w-screen top flex flex-col flex-wrap justify-center items-center px-8 bg-blue-600 shadow-lg"
    />
    <div
      class="absolute h-screen w-screen top-0 flex flex-col justify-center items-center"
    >
      <h1 class="text-6xl font-bold text-white px-4 opacity-75">
        GroupCodingHub
      </h1>
      <h3 class="text-2xl font-bold text-white px-4 opacity-75">
        A social network a place where you can share code and talk to one
        another and work together in projects and homework activities. As a
        community of coders, I feel we will connect them to solution that enable
        productivity, growth, and discovery to your code. Are you?
      </h3>
      <div class="bg-white w-1/4 mx-4 mb-4 rounded-xl shadow p-4 text-black">
        <div
          class="bg-white hover:bg-red-500 w-1/8 mx-4 mb-4 rounded-xl shadow p-4 text-black"
        >
          A Coder
        </div>
        <div
          class="bg-white hover:bg-green-500 w-1/8 mx-4 mb-4 rounded-xl shadow p-4 text-black"
        >
          A Student
        </div>
        <div
          class="bg-white hover:bg-purple-500 w-1/8 mx-4 mb-4 rounded-xl shadow p-4 text-black"
        >
          A Developer
        </div>
      </div>
    </div>
    <coder />
    <studnet />
    <developer />
    <signup />
  </div>
</template>

<script>
import coder from '../components/coder'
import studnet from '../components/student'
import developer from '../components/developer'
import signup from '../components/signup'
export default {
  name: 'Home',
  components: {
    coder,
    studnet,
    developer,
    signup
  }
}
</script>
