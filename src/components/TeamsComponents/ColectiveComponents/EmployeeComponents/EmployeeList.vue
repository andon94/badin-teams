<template>
  <div class="employee-list">
    <ul>
      <Employee v-for="employee in allTeamEmployees" :key="employee.id"
                :employee="employee" />
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Employee from './Employee.vue'

export default {
  name: 'EmployeeList',
  components: {
    Employee
  },
  watch: {
    selectedTeam() {
      if (this.selectedTeam.id) this.fetchTeamEmployees(this.selectedTeam.id)
    }
  },
  computed: {
    ...mapGetters(['allTeamEmployees', 'selectedTeam']),
  },
  methods: {
    ...mapActions(['fetchTeamEmployees']),
    ...mapMutations(['setTeamEmployees'])
  },
  beforeDestroy() {
    this.setTeamEmployees([])
  }
}
</script>

<style scoped lang="scss">
.employee-list {
  margin: 20px 20px 40px;
}
</style>