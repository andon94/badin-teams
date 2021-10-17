<template>
  <div class="team-list">
    <ul>
      <li v-for="(team, i) in teams" :key="i"
          @click="handleTeamClick(team.id)">
        <Team :team="team"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Team from './Team.vue'

export default {
  name: 'TeamList',
  props: {
    teams: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Team
  },
  methods: {
    handleTeamClick (id) {
      if (this.$route.name === 'Teams') this.$router.push({path:'/employees/:id', query:{id: id}})
      // this.$router.push({path:'/team/:id', query:{id: id}})
    }
  }
}
</script>

<style scoped lang="scss">
.team-list {
  margin: 20px 10px;

  ul {
    width: 100%;
    li {
      list-style: none;
    }
  }
}
</style>
