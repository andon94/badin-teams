<template>
  <Loader v-if="loader"/>
  <div class="item-list projects"
       v-else>
    <div class="item-list-container">
      <BaseFilter  placeholder="Filter projects"
                  :dataArr="this.projects"
                  :filterProperties="['name']"
                  @filteredData="setFilteredData"/>
      <div class="project"
          v-for="(project, i) in filteredData" :key="i"
          @click="handleProjectClick(project.id)">
        <Project :project="project"/>
      </div>
    </div>
  </div>
</template>

<script>
import { projectsApi } from '../services/api/projects.js'
import Loader from '../components/BaseComponents/Loader.vue'
import BaseFilter from '../components/BaseComponents/BaseFilter.vue'
import Project from '../components/Projects/Project.vue'

export default {
  name: 'EditProjects',
  components: {
    Loader,
    BaseFilter,
    Project
  },
  data () {
    return {
      projects: [],
      filteredData: [],
      loader: true
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
          this.loader = false
        })
        .catch(err => {
          console.log(err)
          this.loader = false
        })
    },
    setFilteredData (val) {
      this.filteredData = val
    },
    handleProjectClick (val) {
      this.$router.push({path:'/edit/project/:id', query:{id: val}})
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/list-container.scss';
</style>
