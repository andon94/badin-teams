<template>
  <div class="employee-list">
    <ul>
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
  props: {
    team: {
      type: Object,
      default: null
    }
  },
  watch: {
    team() {
      this.fetchTeamEmployees(this.team.id)
    }
  },
  computed: {
    ...mapGetters(['allTeamEmployees']),
  },
  methods: {
    ...mapActions(['fetchTeamEmployees']),
  },
  beforeDestroy() {
    this.$store.state.employees.teamEmployees = []
  }
}
</script>

<style scoped lang="scss">
.employee-list {
  margin: 20px 20px 40px;
}
</style>