<template>
  <Loader v-if="loader"/>
  <div class="item-list clients"
       v-else>
    <div class="item-list-container">
      <BaseFilter  placeholder="Filter clients"
                  :dataArr="this.clients"
                  :filterProperties="['name']"
                  @filteredData="setFilteredData"/>
      <div class="client"
          v-for="(client, i) in filteredData" :key="i"
          @click="handleClientClick(client.id)">
        <Client :client="client" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Loader from '../components/BaseComponents/Loader.vue'
import BaseFilter from '../components/BaseComponents/BaseFilter.vue'
import Client from '../components/Clients/Client.vue'

export default {
  name: 'EditClients',
  components: {
    Loader,
    BaseFilter,
    Client
  },
  data () {
    return {
      filteredData: [],
      loader: true
    }
  },
  mounted () {
    this.fetchClients()
      .then(() => {
        this.loader = false
      })
      .catch(err => {
        this.loader = false
        console.log(err)
      })
  },
  computed: {
    ...mapGetters(['clients'])
  },
  watch: {
    clients () {
      this.filteredData = this.clients
    }
  },
  methods: {
    ...mapActions(['fetchClients']),
    setFilteredData (val) {
      this.filteredData = val
    },
    handleClientClick (val) {
      this.$router.push({path:'/edit/client/:id', query:{id: val}})
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/list-container.scss';
</style>