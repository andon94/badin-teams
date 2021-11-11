<template>
  <div class="profile">
    <Team :team="team"/>
    <BaseArrayViewer label="Members"
                     path="employee"
                     :dataArr="teamMembers"
                     name="name"/>
    <BaseArrayViewer label="Clients"
                     path="client"
                     :dataArr="teamClients"
                     name="name"/>
    <BaseArrayViewer label="Projects"
                     path="project"
                     :dataArr="teamProjects"
                     name="name"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Team from '../components/Teams/ColectiveComponents/TeamComponents/Team.vue'
import BaseArrayViewer from '../components/BaseComponents/BaseArrayViewer.vue'

export default {
  name: 'TeamProfile',
  components: {
    Team,
    BaseArrayViewer
  },
  mounted () {
    this.fetchTeam(this.$route.query.id)
    this.fetchTeamMembers(this.$route.query.id)
    this.fetchTeamProjects(this.$route.query.id)
    this.fetchTeamClients(this.$route.query.id)
  },
  computed: {
    ...mapGetters(['team', 'teamMembers', 'teamProjects', 'teamClients']),
  },
  methods: {
    ...mapActions(['fetchTeam', 'fetchTeamMembers', 'fetchTeamProjects', 'fetchTeamClients'])
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/profile.scss';
</style>
