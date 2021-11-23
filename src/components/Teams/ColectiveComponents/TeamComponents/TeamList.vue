<template>
  <Loader v-if="loader"/>
  <div class="item-list"
       v-else>
    <div class="item-list-container">
      <BaseFilter placeholder="Search teams"
                  :dataArr="this.teams"
                  :filterProperties="['name']"
                  @filteredData="setFilteredData"/>
      <div v-for="(team, i) in filteredData" :key="i"
          @click="handleTeamClick(team.id)">
        <Team :team="team"/>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../../../BaseComponents/Loader.vue'
import BaseFilter from '../../../BaseComponents/BaseFilter.vue'
import Team from './Team.vue'

export default {
  name: 'TeamList',
  components: {
    Loader,
    BaseFilter,
    Team
  },
  props: {
    teams: {
      type: Array,
      default: () => []
    },
    loader: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      filteredData: []
    }
  },
  watch: {
    teams () {
      this.filteredData = this.teams
    }
  },
  methods: {
    handleTeamClick (id) {
      if (this.$route.name === 'Teams') this.$router.push({path:'/employees/:id', query:{id: id}})
      if (this.$route.name === 'EditTeams') this.$router.push({path:'/edit/team/:id', query:{id: id}})
    },
    setFilteredData (val) {
      this.filteredData = val
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/list-container.scss';
</style>
