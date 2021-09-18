<template>
  <div class="team-list"
       :class="this.$store.state.teams.team ? 'single-team-layout' : ''">
    <ul>
      <Team v-for="(team, i) in allTeams" :key="i"
            :team="team"/>
    </ul>
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
    if (!this.allTeams.length) this.fetchTeams()
  },
  computed: {
    ...mapGetters(['allTeams']),
  },
  methods: {
    ...mapActions(['fetchTeams']),
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