<template>
  <div>
    <div class="w-full flex flex-wrap mb-8 items-center">
      <div v-for="(project, index) in projects" :key="index" class="w-1/4 p-2">
        <Card :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import projects from '../data/projects'
export default {
  name: 'Portfolio',
  components: {
    Card
  },
  data() {
    return {
      projects
    }
  }
}
</script>

<style lang="scss" scoped></style>
