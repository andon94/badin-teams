<template>
  <div class="add-employees">
    <form @submit.prevent="filterEmployees">
      <BaseInput :placeholder="`Add a member to ${selectedTeam.name}`"
                 v-model="employeeInput"/>
    </form>

    <div class="employee-container"
         v-if="filteredEmployees.length">
      <ul>
        <Employee v-for="(employee, i) in filteredEmployees" :key="i"
                  :employee="employee" />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import BaseInput from '../BaseComponents/BaseInput.vue'
import Employee from '../Teams/ColectiveComponents/EmployeeComponents/Employee.vue'

export default {
  name: 'AddEmployees',
  components: {
    BaseInput,
    Employee
  },
  data() {
    return {
      employeeInput: '',
      employees: [],
      filteredEmployees: []
    }
  },
  created() {
    if (!this.allEmployees.length) {
      this.fetchEmployees()
    }
  },
  computed: {
    ...mapGetters(['allEmployees', 'isUpdated', 'selectedTeam'])
  },
  watch: {
    allEmployees() {
      this.employees = [...this.allEmployees]
    },
    employeeInput() {
      this.filterEmployees()
    },
    isUpdated() {
      if (this.isUpdated) {
        this.fetchTeamEmployees(this.selectedTeam.id)
        this.updateTeam(false)
      }
      this.filteredEmployees = []
      this.employeeInput = ''
    }
  },
  methods: {
    ...mapActions(['fetchEmployees', 'fetchTeamEmployees']),
    ...mapMutations(['setTeam', 'updateTeam']),
    filterEmployees() {
      if (this.employeeInput.length > 0) {
        let data = []
        this.allEmployees.forEach(employee => {
          if (employee.name.toLowerCase().includes(this.employeeInput.toLowerCase())) data.push(employee)
        })
        this.filteredEmployees = [...data]
      } else if (!this.employeeInput.length) this.filteredEmployees = []
    }
  },
  beforeDestroy() {
    this.setTeam({})
  }
}
</script>

<style scoped lang="scss">
.add-employees {
  .employee-container {
    position: absolute;
    background: white;
    margin: 15px 0;
    padding: 20px;
    border: 3px solid black;
    border-radius: 10px;
    max-height: 350px;
    overflow: scroll;
    width: calc(100% - 30px);
    ul {
      padding: 10px 0;
    }
  }
}

</style>