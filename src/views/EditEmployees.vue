<template>
  <div class="edit-employees">
    <EmployeeList :employees="employees"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EmployeeList from '../components/Teams/ColectiveComponents/EmployeeComponents/EmployeeList.vue'

export default {
  name: 'EditEmployees',
  components: {
    EmployeeList
  },
  mounted () {
    this.fetchEmployees()
    // .then
  },
  computed: {
    ...mapGetters(['employees'])
  },
  methods: {
    ...mapActions(['fetchEmployees'])
  }
}
</script>

<style scoped lang="scss">
.edit-employees {
  margin: 20px 10px;
}
</style>