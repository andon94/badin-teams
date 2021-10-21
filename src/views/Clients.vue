<template>
  <div class="clients">
    <BaseFilter  placeholder="Filter clients"
                 :dataArr="this.clients"
                 dataProperty="name"
                 @filteredData="setFilteredData"/>
    <div class="clients-container">
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
import BaseFilter from '../components/BaseComponents/BaseFilter.vue'
import Client from '../components/Clients/Client.vue'

export default {
  name: 'Clients',
  components: {
    BaseFilter,
    Client
  },
  data () {
    return {
      filteredData: []
    }
  },
  mounted () {
    this.fetchClients()
  },
  computed: {
    ...mapGetters(['clients'])
  },
  methods: {
    ...mapActions(['fetchClients']),
    setFilteredData (val) {
      this.filteredData = val
    },
    handleClientClick (val) {
      this.$router.push({path:'/client/:id', query:{id: val}})
    }
  }
}
</script>

<style scoped lang="scss">
  .clients {
    margin: 20px 10px;
  }
</style>