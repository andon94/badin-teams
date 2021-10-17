<template>
  <div class="employee-list">
    <ul>
      <Employee v-for="employee in employees" :key="employee.id"
                :employee="employee" />
    </ul>
  </div>
</template>

<script>
import Employee from './Employee.vue'

export default {
  name: 'EmployeeList',
  components: {
    Employee
  },
  props: {
    employees: {
      type: Array,
      default: () => []
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