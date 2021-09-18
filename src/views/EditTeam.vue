<template>
  <div class="edit-team">
    <AddEmployees :team="selectedTeam"/>
    <EmployeeList :team="selectedTeam"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
  computed: {
    ...mapGetters(['selectedTeam'])
  },
  methods: {
    ...mapActions(['fetchTeam']),
  }
}
</script>


