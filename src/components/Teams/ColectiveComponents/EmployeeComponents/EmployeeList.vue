<template>
  <div class="employee-list">
    <ul>
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
      this.$router.push({path:'/edit/employee/:id', query:{id: id}})
    }
  }
}
</script>

<style scoped lang="scss">
.employee-list {
  &-container {
    position: relative;
    margin: 20px 10px;
  }
}
</style>