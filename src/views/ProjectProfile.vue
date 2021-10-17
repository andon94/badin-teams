<template>
  <div class="project-profile">
    <div class="project-profile-container"
         v-if="project">
      <div class="project-name">
        {{project.name}}
      </div>
      <div class="project-about">
        {{project.about}}
      </div>
      <div class="project-client"
           v-if="project.client">
        {{project.client.name}}
      </div>
    </div>
    <div class="img-container">
      <div></div>
    </div>
  </div>
</template>

<script>
import { projectsApi } from '../services/projects'

export default {
  name: 'ProjectProfile',
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
