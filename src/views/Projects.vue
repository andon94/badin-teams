<template>
  <Loader v-if="!projects.length"/>
  <div class="projects"
       v-else>
    <BaseFilter  placeholder="Filter projects"
                  :dataArr="this.projects"
                  :filterProperties="['name']"
                  @filteredData="setFilteredData"/>
    <div class="projects-container">
      <div class="project"
          v-for="(project, i) in filteredData" :key="i"
          @click="handleProjectClick(project.id)">
        <Project :project="project"/>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../components/BaseComponents/Loader.vue'
import { projectsApi } from '../services/api/projects.js'
import BaseFilter from '../components/BaseComponents/BaseFilter.vue'
import Project from '../components/Projects/Project.vue'

export default {
  name: 'Projects',
  components: {
    Loader,
    BaseFilter,
    Project
  },
  data () {
    return {
      projects: [],
      filteredData: []
    }
  },
  mounted () {
    this.fetchProjects()
  },
  watch: {
    projects () {
      this.filteredData = this.projects
    }
  },
  methods: {
    fetchProjects () {
      projectsApi.fetchProjects()
        .then(res => {
          this.projects = [...res]
        })
        .catch(err => {
          console.log(err)
        })
    },
    setFilteredData (val) {
      this.filteredData = val
    },
    handleProjectClick (val) {
      this.$router.push({path:'/project-profile/:id', query:{id: val}})
    }
  }
}
</script>

<style scoped lang="scss">
.projects {
  margin: 20px 10px;
}
</style>
