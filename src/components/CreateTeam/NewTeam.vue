<template>
  <div class="new-team">
    <ValidationObserver ref="createTeamForm"
                        v-slot="{ invalid }">
      <form @submit.prevent>
        <PhotoInput label="Add a photo"
                    photoPath=""/>
        <BaseInput :placeholder="'Team name'"
                   v-model="teamName"
                   rules="required"/>
        <BaseInput :placeholder="'Client'"
                   :selectArr="clients"
                   v-model="client"
                   name="name"/>
        <BaseInput :placeholder="'Project'"
                   :selectArr="projects"
                   v-model="project"
                   name="name"/>
        <TextareaInput placeholder="About team"
                       v-model="about"/>
        <BaseButton text="Create"
                    :disabled="invalid"
                    @click="handleCreate"/>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { teamsApi } from '../../services/api/teams'
import PhotoInput from '../BaseComponents/PhotoInput.vue'
import BaseInput from '../BaseComponents/BaseInput.vue'
import TextareaInput from '../BaseComponents/TextareaInput.vue'
import BaseButton from '../BaseComponents/BaseButton.vue'

export default {
  name: 'NewTeam',
  components: {
    PhotoInput,
    BaseInput,
    TextareaInput,
    BaseButton
  },
  data() {
    return {
      image: '',
      teamName: '',
      client: '',
      project: '',
      about: ''
    }
  },
  mounted () {
    if (!this.clients.length) this.fetchClients()
    if (!this.projects.length) this.fetchProjects()
  },
  computed: {
    ...mapGetters(['clients', 'projects']),
  },
  methods: {
    ...mapActions(['fetchClients', 'fetchProjects']),
    handleCreate () {
      this.$refs.createTeamForm.validate().then(success => {
        if (!success) {
          return
        } else {
          this.createNewTeam()
        }
      })
    },
    createNewTeam () {
      const clientsArr = []
      if (this.client.id) clientsArr.push(this.client.id)

      const projectsArr = []
      if (this.project.id) projectsArr.push(this.project.id)

      const data = {
        image: null,
        name: this.teamName,
        clients: clientsArr,
        projects: projectsArr,
        about: this.about,
      }

      teamsApi.createTeam(data)
        .then(res => {
          this.$router.push({path:'/team-profile/:id', query:{id: res.id}})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.new-team {
  margin: 35px 10px;

  form {
    .input-container {
      display: flex;
      margin-top: 20px;
    }
  }
}
</style>
