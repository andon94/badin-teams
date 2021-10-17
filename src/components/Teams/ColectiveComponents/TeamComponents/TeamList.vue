<template>
  <div class="team-list">
    <!-- <ul v-if="!selectedTeam.id"> -->
    <ul>
      <li v-for="(team, i) in teams" :key="i"
          @click="handleTeamClick(team.id)">
        <Team :team="team"/>
      </li>
    </ul>
    <!-- <ul v-else>
      <Team :team="selectedTeam"/>
    </ul> -->
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
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
    // ...mapActions(['fetchTeam']),
    handleTeamClick (id) {
      console.log('ayy')
      this.$router.push({path:'/team/:id', query:{id: id}})
    }
  }
}
</script>

<style scoped lang="scss">
.team-list {
  margin: 20px 10px;

  // &.single-team-layout {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // }

  ul {
    li {
      list-style: none;
    }
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
