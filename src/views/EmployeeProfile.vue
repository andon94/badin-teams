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
        <div>{{employee.position}}
        </div>
      </li>
      <li>
        <div class="label">Seniority:</div>
        <div>{{employee.seniority}}
        </div>
      </li>
      <li>
        <div class="label">Main technology:</div>
        <div>{{employee.mainTechnology}}
        </div>
      </li>
      <li>
        <div class="label">Lead:</div>
        <div>{{employee.lead}}
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
      employee: {}
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