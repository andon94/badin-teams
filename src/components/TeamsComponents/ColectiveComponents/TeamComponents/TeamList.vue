<template>
  <div class="team-list">
    <ul v-if="!selectedTeam.id">
      <Team v-for="(team, i) in allTeams" :key="i"
            :team="team"/>
    </ul>
    <ul v-else>
      <Team :team="selectedTeam"/>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Team from './Team.vue'

export default {
  name: 'TeamList',
  components: {
    Team
  },
  created() {
    if (this.$route.name === 'Teams' && this.$route.query.id) {
      this.fetchTeam(this.$route.query.id)
    } else if (this.$route.name === 'CreateTeams') {
      this.setTeam({})
      this.fetchTeams()
    }
  },
  computed: {
    ...mapGetters(['allTeams', 'selectedTeam']),
  },
  methods: {
    ...mapActions(['fetchTeams', 'fetchTeam']),
    ...mapMutations(['setTeam'])
  }
}
</script>

<style scoped lang="scss">
.team-list {
  margin: 20px 10px;

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

  ul {
    width: 100%;
  }
}

</style>