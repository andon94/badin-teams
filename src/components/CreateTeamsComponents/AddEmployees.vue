<template>
  <div class="add-employees">
    <form @submit.prevent="filterEmployees()">
      <!-- povuci ime tima kroz querry params da ne bi lagovalo -->
      <!-- ubaci selectInput sa novim prop za apdejt dok kucas pored dugmeta -->
      <p>Add a member to <span>{{team.name}}</span></p>
      <div class="input-container">
        <input type="text"
               placeholder="Employee name"
               v-model="employeeInput">
        <button type="submit">Search</button>
      </div>
    </form>

    <div class="employee-container"
         v-if="filteredEmployees.length">
      <ul>
        <Employee v-for="(employee, i) in filteredEmployees" :key="i"
                  :employee="employee"
                  :team="team"/>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Employee from '../TeamsComponents/ColectiveComponents/EmployeeComponents/Employee.vue'

export default {
  name: 'AddEmployees',
  components: {
    Employee
  },
  props: {
    team: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      employeeInput: '',
      employees: [],
      filteredEmployees: []
    }
  },
  created() {
    if (!this.$store.state.employees.employees.length) {
      this.fetchEmployees()
    }
  },
  computed: {
    ...mapGetters(['allEmployees', 'isUpdated'])
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
        this.fetchTeamEmployees(this.team.id)
        this.$store.state.teams.updated = false
      }
      this.filteredEmployees = []
      this.employeeInput = ''
    }
  },
  methods: {
    ...mapActions(['fetchEmployees', 'fetchTeamEmployees']),
    filterEmployees() {
      if (this.employeeInput.length > 0) {
        let data = []
        this.allEmployees.forEach(employee => {
          if (employee.name.toLowerCase().includes(this.employeeInput.toLowerCase())) data.push(employee)
        })
        this.filteredEmployees = [...data]
      } else if (!this.employeeInput.length) this.filteredEmployees = []
    },
    clearFilteredEmployees() {
      this.filteredEmployees = []
    }
  },
  beforeDestroy() {
    this.$store.state.teams.team = {}
  }
}
</script>

<style scoped lang="scss">
.add-employees {
  margin: 30px 10px;
  form {
    p {
      margin-bottom: 15px;
      font-weight: bold;
      span {
        color: crimson;
      }
    }

    .input-container {
      display: flex;

      button, input {
        flex-grow: 1;
        padding: 10px 15px;
        border: 3px solid black;
        outline: none;
      }

      input {
        border-bottom-left-radius: 10px;
      }

      button {
        border-top-right-radius: 10px;
        border-left: none;
        background: black;
        color: white;
        font-weight: bold;
      }
    }
  }

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