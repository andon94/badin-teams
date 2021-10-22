<template>
  <div class="create-project">
    <NewProject />
  </div>
</template>

<script>
import NewProject from '../components/CreateProject/NewProject.vue'

export default {
  name: 'CreateProject',
  components: {
    NewProject
  }
}
</script>