<template>
  <div class="create-client">
    <NewClient />
  </div>
</template>

<script>
import NewClient from '../components/CreateClient/NewClient.vue'

export default {
  name: 'CreateClient',
  components: {
    NewClient
  }
}
</script>