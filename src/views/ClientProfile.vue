<template>
  <div class="profile client">
    <Client :client="client"/>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { clientsApi } from '../services/api/clients'
import Client from '../components/Clients/Client.vue'

export default {
  name: 'ClientProfile',
  components: {
    Client
  },
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
    ...mapMutations(['setError']),
    fetchClient () {
      clientsApi.fetchClient(this.$route.query.id)
        .then(res => {
          this.client = {...res}
        })
        .catch(err => {
          this.setError(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/profile.scss';
</style>
