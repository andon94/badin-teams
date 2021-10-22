<template>
  <div class="edit-teams">
    <TeamList :teams="teams"
              :teamsFilter="true"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TeamList from '../components/Teams/ColectiveComponents/TeamComponents/TeamList.vue'

export default {
  name: 'EditTeams',
  components: {
    TeamList
  },
  mounted () {
    this.fetchTeams()
    // .then
  },
  computed: {
    ...mapGetters(['teams'])
  },
  methods: {
    ...mapActions(['fetchTeams'])
  }
}
</script>
