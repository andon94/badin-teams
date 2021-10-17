<template>
  <div class="new-team">
    <form @submit.prevent="createNewTeam">
      <PhotoInput label="Add a photo"
                  photoPath=""/>
      <BaseInput :placeholder="'Team name'"
                 v-model="teamName"/>
      <BaseInput :placeholder="'Client'"
                 :selectArr="clients"
                 v-model="client"/>
      <BaseInput :placeholder="'Project'"
                 :selectArr="projects"
                 v-model="project"/>
      <TextareaInput placeholder="About team"
                     v-model="about"/>
      <BaseButton text="Create"
                  @click="createNewTeam"/>
    </form>
  </div>
</template>

<script>
import { teamsApi } from '../../services/teams'
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
      clients: ['Laf', 'Super Top', 'Joca i Nena', 'Dagi'],
      project: '',
      projects: ['Menhetn', 'Pustinjska oluja', 'X'],
      about: ''
    }
  },
  methods: {
    createNewTeam() {
      const data = {
        image: null,
        name: this.teamName,
        clients: [],
        projects: [],
        about: this.about,
      }

      teamsApi.createTeam(data)
        .then(res => {
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