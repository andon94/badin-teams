<template>
  <div class="item">
    <div class="item-info">
      <div class="item-info-name">
        <div>
          {{project.name}}
        </div>
      </div>
      <div class="item-info-about">
        <div>
          {{project.about}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/list-item.scss';
</style>