<template>
  <div class="edit-employees">
    <EmployeeList :employees="employees"
                  :loader="loader"/>
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
  data () {
    return {
      loader: true
    }
  },
  mounted () {
    this.fetchEmployees()
      .then(() => {
        this.loader = false
      })
      .catch(err => {
        this.loader = false
        console.log(err)
      })
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
  padding-top: 40px;
}
</style>