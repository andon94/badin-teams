<template>
  <div class="create-teams">
    <NewTeam />
    <TeamList />
  </div>
</template>

<script>
import TeamList from '../components/TeamsComponents/ColectiveComponents/TeamComponents/TeamList.vue'
import NewTeam from '../components/CreateTeamsComponents/NewTeam.vue'

export default {
  name: 'CreateTeams',
  components: {
    TeamList,
    NewTeam,
  }
}
</script>
