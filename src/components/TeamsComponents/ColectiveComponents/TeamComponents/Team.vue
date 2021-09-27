<template>
  <li class="team">
    <div class="name"
         @click="editTeam">
      {{team.name}}
    </div>
    <div class="delete" v-if="$route.path === '/create-teams'">
      <button @click="removeTeam">delete</button>
    </div>
  </li>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Team',
  props: {
    team: {
      type: Object,
      default: null
    }
  },
  methods: {
    ...mapActions(['deleteTeam', 'fetchTeamEmployees']),
    ...mapMutations(['setTeam']),
    // ubaci uslov u editTeam kad si na teams stranici
    editTeam() {
      if (this.$route.path === '/create-teams') this.$router.push({ path: `/create-teams/${this.team.id}`})
      else if (this.$route.path === '/teams') {
        this.$router.push({path:'/teams', query:{id: this.team.id}})
        this.setTeam(this.team)
        this.fetchTeamEmployees(this.team.id)
      }
    },
    removeTeam() { this.deleteTeam(this.team.id) }
  }
}
</script>

<style scoped lang="scss">
li {
  list-style-type: none;
  width: 100%;
  margin: 20px 0;
  padding: 0 10px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .delete {
    margin-left: 25px;
    button {
      border: none;
      outline: none;
      background: none;
      font-size: 14px;
      color: crimson;
      font-weight: bold;
    }
  }
}
</style>