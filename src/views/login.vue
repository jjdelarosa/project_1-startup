<template>
  <div>
    <NavBar />
    <div
      class="pt-24 min-h-screen w-screen top flex flex-col flex-wrap justify-center items-center px-8 bg-blue-600 shadow-lg"
    >
    <div class="bg-white w-1/4 mx-4 mb-4 rounded-xl shadow p-4 text-black">
    <h1>Email</h1>
    <input 
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
    <h1>Password</h1>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Password" />
    <div class="flex items-center justify-btween py-2">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Login</button>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  name: 'login',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped></style>