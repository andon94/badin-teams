<template>
  <div class="item">
    <div class="item-info">
      <div class="item-info-name">
        <div>
          {{employee.firstName}}
        </div>
        <div>
          {{employee.lastName}}
        </div>
        <div>
          {{employee.nickname}}
        </div>
      </div>
      <div class="item-info-about">
        <div>
          {{employee.workingArea}}
        </div>
      </div>
      <div class="item-info-about">
        <div>
          {{employee.seniority}}
        </div>
      </div>
    </div>
    <div class="item-image">
      <img v-if="employee.imageViewPath"
           :src="`${baseUrl}/${employee.imageViewPath}`">
      <div v-else
           class="item-image-placeholder">
        <svg-icon type="mdi" :path="path.placeholder"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'

export default {
  name: 'Employee',
  components: {
    SvgIcon
  },
  props: {
    employee: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      imgClicked: false,
      baseUrl: process.env.VUE_APP_API_BASE_URL,
      path: {
        placeholder: mdiAccount
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/list-item.scss';
</style>