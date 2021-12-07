<template>
  <div class="array-viewer" v-if="dataArr.length">
    <div class="label">{{label}}: </div>
    <div class="array-viewer-element"
         v-for="(element, i) in dataArr" :key="i">
      <router-link class="link"
                   :to="{path:`/${path}-profile/:id`, query:{id: element.id}}">
        <div class="link-img">
          <img :src="`${baseUrl}/${element.imageViewPath}`"
              v-if="element.imageViewPath">
        </div>
        <div v-if="!element.imageViewPath && label !== 'Projects'"
             class="img-placeholder">
        </div>
        <span>{{label === 'Members' ? `${element.firstName} ${element.lastName} ${element.nickname}` : element[name]}}</span>
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
  },
  data () {
    return {
      baseUrl: process.env.VUE_APP_API_BASE_URL
    }
  }
}
</script>

<style lang="scss">
.array-viewer {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  .label {
    font-size: 14px;
    color: $light;
    font-weight: bold;
    flex-grow: 1;
    width: 100vw;
  }
  &-element{
    margin: 10px 20px 10px 0;
    a {
      color: $light;
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        padding-right: 20px;
      }

      .link-img {

        width: 80px;
        height: 80px;
        overflow: hidden;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid $light;

        img {
          max-width: 120px;
          max-height: 120px;
        }
      }

      .img-placeholder {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: $badin-color;
      }

      span {
        margin-top: 5px;
        max-width: 100px;
      }
    }
  }
}
</style>