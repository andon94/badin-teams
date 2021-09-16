<template>
  <div class="team-list"
       :class="this.$store.state.teams.team ? 'single-team-layout' : ''">
    <ul>
      <Team v-for="(team, i) in teams" :key="i"
            :team="team"/>
    </ul>
    <div class="button-container" v-if="this.$store.state.teams.team">
      <button @click="clearSelection()">back</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Team from './Team.vue'

export default {
  name: 'TeamList',
  components: {
    Team
  },
  created() {
    this.fetchTeams()
  },
  computed: {
    ...mapGetters(['allTeams']),
    teams() {
      if (this.$store.state.teams.team !== '') return [this.$store.state.teams.team]
      else return this.allTeams
    }
  },
  methods: {
    ...mapActions(['fetchTeams']),
    clearSelection() {
      if (this.$store.state.employees.selectedEmployee.name) {
        this.$store.commit('setSelectedEmployee', {})
      } else {
        this.$store.commit('setTeam', '')
        this.$store.commit('clearTeamEmployees', [])
      }
    }
  }
}
</script>

<style scoped lang="scss">
.team-list {
  margin: 30px 10px;

  &.single-team-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-container {
    button {
      margin: 10px 0 5px 0;;
      padding: 0 35px;
      border: none;
      outline: none;
      background: none;
    }
  }
}

</style>