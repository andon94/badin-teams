<template>
  <div class="new-project">
    <form @submit.prevent>
      <BaseInput :placeholder="'Project name'"
                 v-model="projectName"/>
      <BaseInput :placeholder="'Client'"
                  name="name"
                  :selectArr="clients"
                  v-model="client"/>
      <TextareaInput placeholder="About project"
                     v-model="about"/>
      <BaseButton text="Create"
                  @click="createProject"/>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { projectsApi } from '../../services/api/projects.js'
import BaseInput from '../BaseComponents/BaseInput.vue'
import TextareaInput from '../BaseComponents/TextareaInput.vue'
import BaseButton from '../BaseComponents/BaseButton.vue'

export default {
  name: 'NewProject',
  components: {
    BaseInput,
    TextareaInput,
    BaseButton
  },
  data() {
    return {
      projectName: '',
      client: '',
      about: ''
    }
  },
  mounted () {
    if (!this.clients.length) this.fetchClients()
  },
  computed: {
    ...mapGetters(['clients'])
  },
  methods: {
    ...mapActions(['fetchClients']),
    createProject () {
      const data = {
        name: this.projectName,
        about: this.about,
        clientId: this.client.id
      }

      projectsApi.createProject(data)
        .then(res => {
          console.log(res)
          this.$router.push({path:'/project-profile/:id', query:{id: res.id}})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.new-project {
  margin: 35px 10px;

  form {
    .input-container {
      display: flex;
      margin-top: 20px;
    }
  }
}
</style>
