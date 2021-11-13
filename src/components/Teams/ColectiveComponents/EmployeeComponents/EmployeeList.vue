<template>
  <Loader v-if="loader"/>
  <div class="item-list"
       v-else>
    <div class="item-list-container">
      <BaseFilter placeholder="Filter employees"
                  :dataArr="this.employees"
                  :filterProperties="['firstName', 'lastName', 'nickname']"
                  @filteredData="setFilteredData"/>
      <div v-for="(employee, i) in filteredData" :key="i"
          @click="handleEmployeeClick(employee.id)">
        <Employee :employee="employee" />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../../../BaseComponents/Loader.vue'
import BaseFilter from '../../../BaseComponents/BaseFilter.vue'
import Employee from './Employee.vue'

export default {
  name: 'EmployeeList',
  components: {
    Loader,
    BaseFilter,
    Employee
  },
  props: {
    employees: {
      type: Array,
      default: () => []
    },
    loader: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      filteredData: []
    }
  },
  watch: {
    employees () {
      this.filteredData = this.employees
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
@import '@/assets/css/list-container.scss';
</style>