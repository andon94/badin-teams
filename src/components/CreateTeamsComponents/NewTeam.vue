<template>
  <div class="new-team">
    <form @submit.prevent="createNewTeam()">
      <TeamOrEmployee />
      <SelectInput :placeholder="'Team name'"
                   @inputValue="setTeamName"
                   :buttonInput="true"/>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TeamOrEmployee from '../SmallComponents/TeamOrEmploye.vue'
import SelectInput from '../SmallComponents/SelectInput.vue'

export default {
  name: 'NewTeam',
  components: {
    TeamOrEmployee,
    SelectInput
  },
  data() {
    return {
      teamName: ''
    }
  },
  methods: {
    ...mapActions(['createTeam']),
    createNewTeam() {
      this.createTeam(this.teamName)
      this.teamName = ''
    },
    setTeamName(val) {
      this.teamName = val
    },
  }
}
</script>

<style scoped lang="scss">
.new-team {
  margin: 20px 10px;

  form {
    .input-container {
      display: flex;
      margin-top: 20px;
    }
  }
}
</style>