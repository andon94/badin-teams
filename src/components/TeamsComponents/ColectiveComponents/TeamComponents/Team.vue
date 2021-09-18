<template>
  <li class="team">
    <div class="name"
         @click="setTeam()">
      {{team.name}}
    </div>
    <div class="delete" v-if="this.$store.state.teams.team">
      <button @click="removeTeam">delete</button>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Employee',
  props: {
    team: {
      type: Object,
      default: null
    }
  },
  methods: {
    ...mapActions(['deleteTeam']),
    setTeam() { this.$router.push({ path: `/create-teams/${this.team.id}`}) },
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