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
    <div class="img-container">
      <div></div>
    </div>
  </div>
</template>

<script>
import { clientsApi } from '../services/clients'

export default {
  name: 'ClientProfile',
  data () {
    return {
      client: {}
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
