<template>
  <div class="project">
    <div class="project-name">
      {{project.name}}
    </div>
    <div class="project-about">
      {{project.about}}
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
.project {
  margin: 10px 0;
  &-name {
    font-weight: bold;
    margin-bottom: 5px;
  }
  &-about {
    color: gray;
  }
}
</style>