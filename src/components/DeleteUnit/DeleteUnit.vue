<template>
  <div class="delete-unit">
    <BaseButton :text="`Remove ${label}`"
                type="button"
                @click="handleButtonClick"
                class="button"/>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { teamsApi } from '../../services/api/teams.js'
import { employeesApi } from '../../services/api/employees.js'
import { projectsApi } from '../../services/api/projects.js'
import { clientsApi } from '../../services/api/clients.js'
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
    ...mapMutations(['setError']),
    handleButtonClick () {
      if (this.label === 'team') this.deleteTeam()
      if (this.label === 'employee') this.deleteEmployee()
      if (this.label === 'project') this.deleteProject()
      if (this.label === 'client') this.deleteClient()
    },
    deleteTeam () {
      teamsApi.deleteTeam(this.$route.query.id)
        .then(() => {
          this.$router.push({path:'/edit/teams'})
        })
        .catch(err => {
          this.setError(err)
        })
    },
    deleteEmployee () {
      employeesApi.deleteEmployee(this.$route.query.id)
        .then(() => {
          this.$router.push({path:'/edit/employees'})
        })
        .catch(err => {
          this.setError(err)
        })
    },
    deleteProject () {
      projectsApi.deleteProject(this.$route.query.id)
        .then(() => {
          this.$router.push({path:'/edit/projects'})
        })
        .catch(err => {
          this.setError(err)
        })
    },
    deleteClient () {
      clientsApi.deleteClient(this.$route.query.id)
        .then(() => {
          this.$router.push({path:'/edit/clients'})
        })
        .catch(err => {
          this.setError(err)
        })
    }
  }
}
</script>
<style scoped lang="scss">
.delete-unit {
  /deep/ button {
    background: none;
    border: 3px solid $badin-color;
    color: $error;
  }
}
</style>
