<template>
  <Loader v-if="!name"/>
  <form class="edit project"
        v-else
        @submit.prevent="editProject">
    <BaseInput :placeholder="'Project name'"
                rules="required|characters:50"
                v-model="name"/>
    <TextareaInput placeholder="About project"
                   rules="characters:200"
                   v-model="about"/>
    <div class="button-container">
      <BaseButton type="submit"
                  text="Submit"/>
      <DeleteUnit label="project"/>
    </div>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import {projectsApi} from '../services/api/projects.js'
import Loader from '../components/BaseComponents/Loader.vue'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import TextareaInput from '../components/BaseComponents/TextareaInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'
import DeleteUnit from '../components/DeleteUnit/DeleteUnit.vue'

export default {
  name: 'EditProject',
  components: {
    Loader,
    BaseInput,
    TextareaInput,
    BaseButton,
    DeleteUnit
  },
  data () {
    return {
      name: '',
      about: '',
      clientId: ''
    }
  },
  mounted () {
    this.fetchProject()
  },
  methods: {
    ...mapMutations(['setError']),
    fetchProject () {
      projectsApi.fetchProject(this.$route.query.id)
        .then(res => {
          this.name = res.name
          this.about = res.about
          this.clientId = res.id
        })
        .catch(err => {
          this.setError(err)
        })
    },
    editProject () {
      const data = {
        name: this.name,
        about: this.about,
        clientId:  this.clientId
      }

      // bug na be, nema responsa
      projectsApi.editProject(this.$route.query.id, data)
        .then(res => {
          console.log(res)
          this.$router.push({path:'/project-profile/:id', query:{id: res.id}})
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


