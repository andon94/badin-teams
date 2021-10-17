<template>
  <div class="team-profile">
    <Team :team="team"/>
  </div>
</template>

<script>
import { teamsApi } from '../services/teams'
import Team from '../components/Teams/ColectiveComponents/TeamComponents/Team.vue'

export default {
  name: 'TeamProfile',
  components: {
    Team
  },
  data () {
    return {
      team: {}
    }
  },
  mounted () {
    this.fetchTeam()
  },
  methods: {
    fetchTeam () {
    teamsApi.fetchTeam(this.$route.query.id)
      .then(res => {
        this.team = {...res}
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
