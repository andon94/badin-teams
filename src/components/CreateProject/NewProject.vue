<template>
  <div class="new-project">
    <ValidationObserver ref="createProjectForm"
                        v-slot="{ invalid }">
      <form @submit.prevent>
        <BaseInput :placeholder="'Project name'"
                   v-model="projectName"
                   rules="required"/>
        <BaseInput :placeholder="'Client'"
                   name="name"
                   :selectArr="clients"
                   rules="required"
                   v-model="client"/>
        <TextareaInput placeholder="About project"
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
    handleCreate () {
      this.$refs.createProjectForm.validate().then(success => {
        if (!success) {
          return
        } else {
          this.createProject()
        }
      })
    },
    createProject () {
      const data = {
        name: this.projectName,
        about: this.about,
        clientId: this.client.id
      }

      projectsApi.createProject(data)
        .then(res => {
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
