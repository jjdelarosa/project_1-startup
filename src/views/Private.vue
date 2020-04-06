<template>
  <div
    class="h-screen w-screen bg-cover bg-center shadow-2xl"
    :style="`background-image: url(${bgImage})`"
  >
    <div
      class="flex flex-col items-center bg-white rounded-lg p6 w-1/3 mx-auto mt-8"
    >
      <img
        :src="user.photoURL || defaultPicture"
        class=" bg-black h-32 w-32 rounded-full mx-auto m-8"
      />
      <h1 class="text-purple-800 font-medium text-2xl">
        {{ user.displayName }}
      </h1>
      <h3 class="text-gray-600 mb-8">{{ user.email }}</h3>
    </div>
  </div>
</template>

<script>
import defaultPicture from '../assets/user.png'
import bgImage from '../assets/bg.jpg'
export default {
  name: 'Private',
  data() {
    return {
      defaultPicture,
      bgImage
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style lang="scss" scoped></style>
