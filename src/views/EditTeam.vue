<template>
  <div class="edit-team">
    <AddEmployees />
    <EmployeeList />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EmployeeList from '../components/TeamsComponents/ColectiveComponents/EmployeeComponents/EmployeeList.vue'
import AddEmployees from '../components/CreateTeamsComponents/AddEmployees.vue'

export default {
  name: 'EditTeam',
  components: {
    EmployeeList,
    AddEmployees
  },
  mounted() {
    let routeId = this.$route.params.id
    this.fetchTeam(routeId)
  },
  methods: {
    ...mapActions(['fetchTeam']),
  }
}
</script>


