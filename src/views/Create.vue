<template>
  <div id="app" class="bg-white">
    <header class="font-bold text-2xl items-center">Code Editor</header>
    <vue-editor v-model="content"></vue-editor>
    <button
      @click="saveContent"
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Saving Content
    </button>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor
  },

  data() {
    return {
      content: '<h3>Initial Content</h3>'
    }
  },

  methods: {
    handleSavingContent: function() {
      // You have the content to save
      console.log(this.content)
    }
  }
}
</script>
