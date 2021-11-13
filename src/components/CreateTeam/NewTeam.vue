<template>
  <div class="new-item">
    <ValidationObserver ref="createTeamForm"
                        v-slot="{ invalid }">
      <form @submit.prevent>
        <PhotoInput label="Add photo"
                    @fileSelected="setImage"/>
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
    this.fetchClients()
    this.fetchProjects()
  },
  computed: {
    ...mapGetters(['clients', 'projects']),
  },
  methods: {
    ...mapActions(['fetchClients', 'fetchProjects']),
    setImage (val) {
      this.image = val
    },
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

          const bodyFormData = new FormData();
          bodyFormData.append('file', this.image);

          if (this.image) {
            teamsApi.createTeamPhoto(res.id, bodyFormData)
              .then(() => {
                this.$router.push({path:'/team-profile/:id', query:{id: res.id}})
              })
              .catch(err => {
                this.$router.push({path:'/team-profile/:id', query:{id: res.id}})
                console.log(err)
              })
          } else {
            this.$router.push({path:'/team-profile/:id', query:{id: res.id}})
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/create-item.scss';
</style>
