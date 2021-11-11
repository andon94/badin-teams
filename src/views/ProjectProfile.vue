<template>
  <div class="profile project">
    <Project :project="project" />
    <ul class="profile-details project"
        v-if="project.client">
      <li>
        <div>
          <router-link class="link" :to="{path:'/client-profile/:id', query:{id: project.client.id}}">
            {{project.client.name}}
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { projectsApi } from '../services/api/projects'
import Project from '../components/Projects/Project.vue'

export default {
  name: 'ProjectProfile',
  components: {
    Project
  },
  data () {
    return {
      project: {}
    }
  },
  mounted () {
    this.fetchProject()
  },
  methods: {
    fetchProject () {
      projectsApi.fetchProject(this.$route.query.id)
        .then(res => {
          this.project = {...res}
        })
        .catch(err => {
          console.log(err)
        })
      }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/profile.scss';
</style>
