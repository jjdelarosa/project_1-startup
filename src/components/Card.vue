<template>
  <div class="bg-white rounded shadow-lg justify-center items-center">
    <div class="px-6 -py-4">
      <p class="font-bold text-gray-900 text-lg mb-2">{{ project.name }}</p>
      <p class="text-gray-700 text-base mb-4">
        {{ project.description }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span
        v-for="(hashtag, index) in project.hashtags"
        :key="index"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2"
        >#{{ hashtag }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    project: {
      type: Object,
      default: () => ({
        name: '',
        description: '',
        image: '',
        hashtags: [],
      })
    }
  }
}
</script>
