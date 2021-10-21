<template>
  <BaseButton :text="`Remove ${label}`"
              type="button"
              @click="handleButtonClick"/>
</template>

<script>
import { teamsApi } from '../../services/teams.js'
import { employeesApi } from '../../services/employees.js'
import { projectsApi } from '../../services/projects.js'
import { clientsApi } from '../../services/clients.js'
import BaseButton from '../BaseComponents/BaseButton.vue'

export default {
  name: 'DeleteUnit',
  components: {
    BaseButton
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleButtonClick () {
      // bug na be, vraca errror 500
      if (this.label === 'team') this.deleteTeam()
      if (this.label === 'employee') this.deleteEmployee()
      if (this.label === 'project') this.deleteProject()
      if (this.label === 'client') this.deleteClient()
    },
    deleteTeam () {
      teamsApi.deleteTeam(this.$route.query.id)
        .then(() => {
          this.$router.push({path:'/'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteEmployee () {
      employeesApi.deleteEmployee(this.$route.query.id)
        .then(() => {
          this.$router.push({path:'/'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProject () {
      projectsApi.deleteProject(this.$route.query.id)
        .then(() => {
          this.$router.push({path:'/'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteClient () {
      clientsApi.deleteClient(this.$route.query.id)
        .then(() => {
          this.$router.push({path:'/'})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
