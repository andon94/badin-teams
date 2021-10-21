<template>
  <div class="client">
    {{client.name}}
  </div>
</template>

<script>
export default {
  name: 'Client',
  props: {
    client: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.client {

}
</style>