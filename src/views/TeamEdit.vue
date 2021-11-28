<template>
  <Loader v-if="Object.keys(team).length === 0"/>
  <form class="edit"
        @submit.prevent="editTeam"
        v-else>
    <PhotoInput label="Edit photo"
                class="edit-photo"
                @fileSelected="setImage"/>
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
import { teamsApi } from '../services/api/teams.js'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Loader from '../components/BaseComponents/Loader.vue'
import PhotoInput from '../components/BaseComponents/PhotoInput.vue'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import BaseArrayInput from '../components/BaseComponents/BaseArrayInput.vue'
import TextareaInput from '../components/BaseComponents/TextareaInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'
import DeleteUnit from '../components/DeleteUnit/DeleteUnit.vue'

export default {
  name: 'EditTeam',
  components: {
    Loader,
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
      currentProjects: [],
      image: null
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
    ...mapMutations(['setError']),
    ...mapActions(['fetchTeam', 'fetchTeamMembers', 'fetchTeamProjects', 'fetchTeamClients', 'fetchProjects', 'fetchClients']),
    handleClient (val) {
      this.currentClients = [...val]
    },
    handleProject (val) {
      this.currentProjects = [...val]
    },
    setImage (val) {
      this.image = val
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

      teamsApi.editTeam(this.$route.query.id, data)
        .then(res => {
          const bodyFormData = new FormData();
          bodyFormData.append('file', this.image);

          if (this.image) {
            console.log(this.image)
            teamsApi.createTeamPhoto(res.id, bodyFormData)
              .then(() => {
                this.$router.push({path:'/team-profile/:id', query:{id: res.id}})
              })
              .catch(err => {
                this.$router.push({path:'/team-profile/:id', query:{id: res.id}})
                this.setError(err)
              })
          } else {
            this.$router.push({path:'/team-profile/:id', query:{id: res.id}})
          }
        })
        .catch(err => {
          this.setError(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/edit-item.scss';
</style>


