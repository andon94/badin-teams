<template>
  <div class="employee-list">
    <ul v-if="this.$store.state.teams.team">
      <Employee v-for="employee in allTeamEmployees" :key="employee.id"
                :employee="employee" />
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Employee from './Employee.vue'

export default {
  name: 'EmployeeList',
  components: {
    Employee
  },
  computed: {
    ...mapGetters(['allTeamEmployees']),
    ...mapGetters(['selectedTeam'])
  },
  watch: {
    selectedTeam() {
      this.fetchTeamEmpolyees()
    }
  },
  methods: {
    ...mapActions(['fetchTeamEmpolyees']),
  }
}
</script>

<style scoped lang="scss">
.employee-list {
  margin: 20px 20px 40px;
}
</style>