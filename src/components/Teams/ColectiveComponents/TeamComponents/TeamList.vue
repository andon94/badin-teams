<template>
  <div class="team-list">
    <ul>
      <BaseFilter placeholder="Filter teams"
                  :dataArr="this.teams"
                  dataProperty="name"
                  @filteredData="setFilteredData"/>
      <li v-for="(team, i) in filteredData" :key="i"
          @click="handleTeamClick(team.id)">
        <Team :team="team"/>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseFilter from '../../../BaseComponents/BaseFilter.vue'
import Team from './Team.vue'

export default {
  name: 'TeamList',
  components: {
    BaseFilter,
    Team
  },
  props: {
    teams: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      filteredData: []
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
.team-list {
  margin: 20px 10px;

  ul {
    width: 100%;
    .filter-input {
      width: calc(100% - 20px);
    }
    li {
      list-style: none;
    }
  }
}
</style>
