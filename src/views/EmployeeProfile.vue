<template>
  <div class="profile"
       v-if="employee">
    <Employee :employee="employee" />
    <ul class="profile-details">
      <li>
        <div>{{employee.email}}</div>
      </li>
      <li>
        <div>{{employee.position}}</div>
      </li>
      <li>
        <div>{{employee.mainTechnology}}</div>
      </li>
      <li v-if="employee.lead">
        <div>{{employee.lead}}</div>
      </li>
      <BaseArrayViewer label="Teams"
                       path="team"
                       :dataArr="employeeTeams"
                       name="name"/>
      <BaseArrayViewer label="Clients"
                       path="client"
                       :dataArr="employeeClients"
                       name="name"/>
      <BaseArrayViewer label="Projects"
                       path="project"
                       :dataArr="employeeProjects"
                       name="name"/>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Employee from '../components/Teams/ColectiveComponents/EmployeeComponents/Employee.vue'
import BaseArrayViewer from '../components/BaseComponents/BaseArrayViewer.vue'

export default {
  name: 'EmployeeProfile',
  components: {
    Employee,
    BaseArrayViewer
  },
  data () {
    return {
      baseUrl: process.env.VUE_APP_API_BASE_URL
    }
  },
  mounted () {
    this.fetchEmployee(this.$route.query.id)
    this.fetchEmployeeTeams(this.$route.query.id)
    this.fetchEmployeeClients(this.$route.query.id)
    this.fetchEmployeeProjects(this.$route.query.id)
  },
  computed: {
    ...mapGetters(['employee', 'employeeTeams', 'employeeProjects', 'employeeClients'])
  },
  methods: {
    ...mapActions(['fetchEmployee', 'fetchEmployeeTeams', 'fetchEmployeeClients', 'fetchEmployeeProjects'])
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/profile.scss';
</style>