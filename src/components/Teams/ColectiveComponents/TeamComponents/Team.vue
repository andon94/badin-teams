<template>
  <div class="item">
    <div class="item-info">
      <div class="item-info-name team">
        {{team.name}}
      </div>
      <div class="item-info-about">
        {{team.about}}
      </div>
    </div>
    <div class="item-image">
      <img v-if="team.imageViewPath"
           :src="`${baseUrl}/${team.imageViewPath}`">
      <div v-else
           class="item-image-placeholder">
        <svg-icon type="mdi" :path="path.placeholder"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccountGroup } from '@mdi/js'

export default {
  name: 'Team',
  components: {
    SvgIcon
  },
  props: {
    team: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      baseUrl: process.env.VUE_APP_API_BASE_URL,
      path: {
        placeholder: mdiAccountGroup
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/list-item.scss';
</style>