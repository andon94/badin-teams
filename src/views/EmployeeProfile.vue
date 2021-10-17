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
      <li v-if="teams.length">
        <div class="label">Teams:</div>
        <div v-for="(team, i) in teams" :key="i">
          {{team.name}}
        </div>
      </li>
      <li v-if="clients.length">
        <div class="label">Clients:</div>
        <div v-for="(client, i) in clients" :key="i">
          {{client.name}}
        </div>
      </li>
      <li v-if="projects.length">
        <div class="label">Projects:</div>
        <div v-for="(project, i) in projects" :key="i">
          {{project.name}}
        </div>
      </li>
    </ul>
    <!-- <div class="remove-employee">
      <button @click="removeTheEmployee">
        remove employee
      </button>
    </div> -->
  </div>
</template>

<script>
import { employeesApi } from '../services/employees'

export default {
  name: 'EmployeeProfile',
  data () {
    return {
      employee: {},
      teams: [],
      clients: [],
      projects: []
    }
  },
  mounted () {
    this.fetchEmployee()
  },
  methods: {
    fetchEmployee () {
      employeesApi.fetchEmployee(this.$route.query.id)
        .then(res => {
          this.employee = {...res}
          this.fetchEmployeeTeams()
          this.fetchEmployeeProjects()
          this.fetchEmployeeClients()
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchEmployeeTeams () {
      employeesApi.fetchEmployeeTeams(this.employee.id)
        .then(res => {
          this.teams = res
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchEmployeeClients () {
      employeesApi.fetchEmployeeClients(this.employee.id)
        .then(res => {
          this.clients = res
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchEmployeeProjects () {
      employeesApi.fetchEmployeeProjects(this.employee.id)
        .then(res => {
          this.projects = res
        })
        .catch(err => {
          console.log(err)
        })
    }
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

    // .remove-employee {
    //   margin-top: 20px;
    //   button {
    //     border: none;
    //     outline: none;
    //     background-color: white;
    //     color: crimson;
    //     padding: 10px 0;
    //   }
    // }
  }
}
</style>