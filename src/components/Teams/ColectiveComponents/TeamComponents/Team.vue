<template>
  <div class="team">
    <div class="team-name">
      {{team.name}}
    </div>
    <div class="team-about">
      {{team.about}}
    </div>
    <!-- <div class="team-delete" v-if="$router.name='EditTeams'">
      <button @click="removeTeam">delete</button>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'Team',
  props: {
    team: {
      type: Object,
      default: null
    }
  },
  methods: {
    // ...mapActions(['fetchTeam']),

    // ...mapActions(['deleteTeam', 'fetchTeamEmployees']),
    // ...mapMutations(['setTeam']),
    // // ubaci uslov u editTeam kad si na teams stranici
    // editTeam() {
    //   if (this.$route.name === 'EditTeams') this.$router.push({ path: `/edit/team/${this.team.id}`})
    //   else if (this.$route.path === '/teams') {
    //     this.$router.push({path:'/teams', query:{id: this.team.id}})
    //     this.setTeam(this.team)
    //     this.fetchTeamEmployees(this.team.id)
    //   }
    // },
    // removeTeam() { this.deleteTeam(this.team.id) }
  }
}
</script>

<style scoped lang="scss">
.team {
  list-style-type: none;
  width: 100%;
  margin: 20px 0;
  padding: 0 10px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-about {
    margin-top: 5px;
    font-size: 14px;
    color: gray;
    font-weight: normal;
  }

  // &-delete {
  //   margin-left: 25px;
  //   button {
  //     border: none;
  //     outline: none;
  //     background: none;
  //     font-size: 14px;
  //     color: crimson;
  //     font-weight: bold;
  //   }
  // }
}
</style>