<template>
  <div class="projects">
    <BaseFilter  placeholder="Filter projects"
                  :dataArr="this.projects"
                  dataProperty="name"
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
import { projectsApi } from '../services/projects.js'
import BaseFilter from '../components/BaseComponents/BaseFilter.vue'
import Project from '../components/Projects/Project.vue'

export default {
  name: 'Projects',
  components: {
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