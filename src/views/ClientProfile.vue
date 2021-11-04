<template>
  <div class="client-profile">
    <div class="client-profile-container">
      <div class="client-name">
        {{client.name}}
      </div>
      <div class="client-about">
        {{client.about}}
      </div>
    </div>
    <div class="client-image">
      <img v-if="client.imageViewPath"
           :src="`${baseUrl}/${client.imageViewPath}`">
      <div v-else
           class="client-image-placeholder"></div>
    </div>
  </div>
</template>

<script>
import { clientsApi } from '../services/api/clients'

export default {
  name: 'ClientProfile',
  data () {
    return {
      client: {},
      baseUrl: process.env.VUE_APP_API_BASE_URL
    }
  },
  mounted () {
    this.fetchClient()
  },
  methods: {
    fetchClient () {
      clientsApi.fetchClient(this.$route.query.id)
        .then(res => {
          this.client = {...res}
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.client-profile {
  margin: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-container {
    .client-name {
      font-weight: bold;
      margin-bottom: 5px;
    }
    .client-about {
      color: gray;
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
      margin-bottom: 20px;
    }
  }
}
</style>
