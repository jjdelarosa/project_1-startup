<template>
  <div class="bg-blue-600 flex justify-center items-center">
    <div class="h-20 bottom-o py-8 flex">
      <p class=" text-white pr-2">&copy; John De La Rosa</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.github:hover {
  @apply text-red-700;
}
.facebook:hover {
  @apply text-blue-700;
}
.twitter:hover {
  @apply text-blue-400;
}
</style>