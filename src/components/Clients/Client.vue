<template>
  <div class="item">
    <div class="item-info">
      <div class="item-info-name">
        <div>
          {{client.name}}
        </div>
      </div>
      <div class="item-info-about">
        <div>
          {{client.about}}
        </div>
      </div>
    </div>
    <div class="item-image">
      <img v-if="client.imageViewPath"
           :src="`${baseUrl}/${client.imageViewPath}`">
      <div v-else
           class="item-image-placeholder"></div>
    </div>
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
  },
  data() {
    return {
      baseUrl: process.env.VUE_APP_API_BASE_URL
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/list-item.scss';
</style>