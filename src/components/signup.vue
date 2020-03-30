<template>
  <div
    class="pt-24 min-h-screen w-screen top flex flex-col flex-wrap justify-center items-center px-8 bg-blue-600 shadow-lg"
  >
    <h1 class="text-6xl text-white font-bold">Sign Up</h1>
    <h3 class="text-2xl text-white">
      If you feel this community of coders is right for you then sign up and
      join the team of wonderful peopole who will help you code in your journey.
    </h3>
    <router-link to="/login">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      
    >
      Sign Up
    </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'signup'
}
</script>
