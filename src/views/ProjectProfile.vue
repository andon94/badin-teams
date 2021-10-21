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
        <span>Klijent:</span>
        <router-link class="link" :to="{path:'/client-profile/:id', query:{id: project.client.id}}">
          {{project.client.name}}
        </router-link>
      </div>
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

<style scoped lang="scss">
.project-profile {
  &-container {
    margin: 20px 10px;

    .project-name {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px;
    }

    .project-about {
      color: gray;
      margin: 10px 0;
    }

    .project-clilent {
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
  }
}
</style>
