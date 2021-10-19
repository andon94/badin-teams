<template>
  <div class="employee-profile"
       v-if="employee">
    <div class="img-container">
      <div></div>
    </div>
    <ul class="employee-details">
      <section class="employee-details-name">
        <li>{{employee.firstName}}</li>
        <li>{{employee.lastName}}</li>
        <li>{{employee.nickname}}</li>
      </section>
      <li>
        <div class="label">Email:</div>
        <div>{{employee.email}}</div>
      </li>
      <li>
        <div class="label">Position:</div>
        <div>{{employee.position}}</div>
      </li>
      <li>
        <div class="label">Seniority:</div>
        <div>{{employee.seniority}}
        </div>
      </li>
      <li>
        <div class="label">Main technology:</div>
        <div>{{employee.mainTechnology}}</div>
      </li>
      <li v-if="employee.lead">
        <div class="label">Lead:</div>
        <div>{{employee.lead}}</div>
      </li>
      <li v-if="employeeTeams.length">
        <div class="label">Teams:</div>
        <div v-for="(team, i) in employeeTeams" :key="i">
          {{team.name}}
        </div>
      </li>
      <li v-if="employeeClients.length">
        <div class="label">Clients:</div>
        <div v-for="(client, i) in employeeClients" :key="i">
          {{client.name}}
        </div>
      </li>
      <li v-if="employeeProjects.length">
        <div class="label">Projects:</div>
        <div v-for="(project, i) in employeeProjects" :key="i">
          {{project.name}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'EmployeeProfile',
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
.employee-profile {
  margin: 30px 20px;

  .img-container {
    width: fit-content;
    margin: 0 auto 30px;
    & > div {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: pink;
    }
  }

  .employee-details {
    li {
      list-style-type: none;
      margin-bottom: 10px;
      font-weight: bold;
      display: flex;

      .label {
        font-weight: normal;
        margin-right: 10px;
      }
    }

    &-name {
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-weight: bold;
      margin: 0 auto 10px;
      li {
        margin-right: 5px;
      }
    }
  }
}
</style>