<template>
  <div class="edit-employees">
    <EmployeeList />
  </div>
</template>

<script>
import EmployeeList from '../components/Teams/ColectiveComponents/EmployeeComponents/EmployeeList.vue'

export default {
  name: 'EditEmployees',
  components: {
    EmployeeList
  }
}
</script>

<style scoped lang="scss">
.edit-employees {
  margin: 20px 10px;
}
</style>