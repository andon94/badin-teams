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
           class="item-image-placeholder">
        <svg-icon type="mdi" :path="path.placeholder"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHandshake } from '@mdi/js'

export default {
  name: 'Client',
  components: {
    SvgIcon
  },
  props: {
    client: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      baseUrl: process.env.VUE_APP_API_BASE_URL,
      path: {
        placeholder: mdiHandshake
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/list-item.scss';
</style>