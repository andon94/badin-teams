<template>
  <form class="edit-team"
        @submit.prevent="editTeam">
    <PhotoInput />
    <BaseInput :placeholder="'Team name'"
                v-model="team.name"/>
    <BaseArrayInput :dataArr="teamClients"
                    :selectArr="clients"
                    name="name"
                    placeholder="Client"
                    @finalArr="handleClient"/>
    <BaseArrayInput :dataArr="teamProjects"
                    :selectArr="projects"
                    name="name"
                    placeholder="Project"
                    @finalArr="handleProject"/>
    <TextareaInput placeholder="About team"
                   v-model="team.about"/>
    <div class="button-container">
      <BaseButton type="submit"
                  text="Submit"/>
      <DeleteUnit label="team"/>
    </div>
  </form>
</template>

<script>
import { teamsApi } from '../services/teams.js'
import { mapActions, mapGetters } from 'vuex'
import PhotoInput from '../components/BaseComponents/PhotoInput.vue'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import BaseArrayInput from '../components/BaseComponents/BaseArrayInput.vue'
import TextareaInput from '../components/BaseComponents/TextareaInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'
import DeleteUnit from '../components/DeleteUnit/DeleteUnit.vue'

export default {
  name: 'EditTeam',
  components: {
    PhotoInput,
    BaseInput,
    BaseArrayInput,
    TextareaInput,
    BaseButton,
    DeleteUnit
  },
  data () {
    return {
      client: '',
      project: '',
      currentClients: [],
      currentProjects: []
    }
  },
  mounted() {
    this.fetchTeam(this.$route.query.id)
    this.fetchTeamProjects(this.$route.query.id)
    this.fetchTeamClients(this.$route.query.id)
    this.fetchClients()
    this.fetchProjects()
  },
  computed: {
    ...mapGetters(['team', 'teamMembers', 'teamProjects', 'teamClients', 'projects', 'clients']),
  },
  methods: {
    ...mapActions(['fetchTeam', 'fetchTeamMembers', 'fetchTeamProjects', 'fetchTeamClients', 'fetchProjects', 'fetchClients']),
    handleClient (val) {
      this.currentClients = [...val]
    },
    handleProject (val) {
      this.currentProjects = [...val]
    },
    editTeam () {
      const clientIds = this.currentClients.map(client => client.id)
      const projectIds = this.currentProjects.map(project => project.id)

      const data = {
        name: this.team.name,
        about: this.team.about,
        image: null,
        clients: clientIds,
        projects: projectIds
      }

      // bug na be, nema responsa
      teamsApi.editTeam(this.$route.query.id, data)
        .then(res => {
          console.log(res)
          this.$router.push({path:'/team/:id', query:{id: res.id}})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.edit-team {
  margin: 20px 10px;
  .button-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>


