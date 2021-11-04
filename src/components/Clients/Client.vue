<template>
  <li class="client">
    <div class="client-container">
      <div class="client-container-name">
        <div>
          {{client.name}}
        </div>
      </div>
      <div class="client-container-about">
        <div>
          {{client.about}}
        </div>
      </div>
    </div>
    <div class="client-image">
      <img v-if="client.imageViewPath"
           :src="`${baseUrl}/${client.imageViewPath}`">
      <div v-else
           class="client-image-placeholder"></div>
    </div>
  </li>
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
.client {
  list-style-type: none;
  width: 100%;
  margin: 20px 0;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &-container {
    margin-right: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &-name, &-about {
      display: flex;
      flex-wrap: wrap;
    }

    &-name {
      margin-bottom: 15px;
      font-weight: bold;
      & > div {
        margin-right: 5px;
      }
    }

    &-about {
      margin: 5px 0;
      & > div {
        color: gray;
        font-weight: normal;
      }
    }
  }

  .client-image {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    &-placeholder {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: pink;
    }
  }
}
</style>