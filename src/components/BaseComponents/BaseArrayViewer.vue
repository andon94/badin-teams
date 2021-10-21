<template>
  <div class="array-viewer" v-if="dataArr.length">
    <div class="label">{{label}}: </div>
    <div class="array-viewer-element"
          v-for="(element, i) in dataArr" :key="i">
      <!-- privremeno dok ne ubacim name kao niz-->
      <router-link class="link" :to="{path:`/${path}-profile/:id`, query:{id: element.id}}">
        {{label === 'Members' ? `${element.firstName} ${element.lastName} ${element.nickname}` : element[name]}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrayViewer',
  props: {
    label: {
      label: String,
      default: ''
    },
    dataArr: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.array-viewer {
  .label {
    margin-left: 10px;
    font-size: 14px;
  }
  &-element{
    margin: 10px;
    font-weight: bold;
  }
}
</style>