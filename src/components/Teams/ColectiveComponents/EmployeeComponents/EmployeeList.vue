<template>
  <div class="employee-list">
    <ul class="employee-list-container">
      <!-- trenutno samo po imenu -->
      <BaseFilter placeholder="Filter employees"
                  :dataArr="this.employees"
                  dataProperty="firstName"
                  @filteredData="setFilteredData"/>
      <li v-for="(employee, i) in filteredData" :key="i"
          @click="handleEmployeeClick(employee.id)">
        <Employee :employee="employee" />
      </li>
    </ul>
  </div>
</template>

<script>
import BaseFilter from '../../../BaseComponents/BaseFilter.vue'
import Employee from './Employee.vue'

export default {
  name: 'EmployeeList',
  components: {
    BaseFilter,
    Employee
  },
  props: {
    employees: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      filteredData: []
    }
  },
  methods: {
    setFilteredData (val) {
      this.filteredData = val
    },
    handleEmployeeClick (id) {
      if (this.$route.name === 'Employees') this.$router.push({path:'/employee-profile/:id', query:{id: id}})
      if (this.$route.name === 'EditEmployees') this.$router.push({path:'/edit/employee/:id', query:{id: id}})    }
  }
}
</script>

<style scoped lang="scss">
.employee-list {
  &-container {
    position: relative;
    li {
      list-style: none;
    }
  }
}
</style>