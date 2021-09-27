<template>
  <div class="employee-profile">
    <div class="img-container">
      <div></div>
    </div>
    <div class="employee-details">
      <div class="employee-name">{{selectedEmployee.name}}</div>
      <div class="employee-title">{{selectedEmployee.title}}</div>
      <div class="employee-seniority">{{selectedEmployee.seniority}}</div>
      <div class="extra">
        <ul>
          <li v-for="(item, i) in selectedEmployee.extra" :key="item+i">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="remove-employee">
        <button @click="removeTheEmployee">
          remove employee
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'EmployeeProfile',
  mounted () {
    if (!this.selectedEmployee.id) this.fetchEmployee(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['selectedEmployee', 'allEmployees'])
  },
  watch: {
    allEmployees() {
      this.$router.push({ path: `/add-employee/`})
    }
  },
  methods: {
    ...mapActions(['removeEmployee', 'fetchEmployee']),
    removeTheEmployee () {
      this.removeEmployee(this.$route.params.id)
    }
  }
}
</script>

<style scoped lang="scss">
.employee-profile {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  margin: 30px 20px;
  .img-container {
    & > div {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: pink;
    }
  }

  .employee-details {
    .employee-name {
      font-weight: bold;
      margin-bottom: 10px;
    }

    .employee-title, .employee-seniority {
      font-size: 14px;
    }

    .extra {
      ul {
        margin-top: 10px;
        li {
          list-style-type: none;
          font-size: 14px;
          margin: 2px 0;
        }
      }
    }

    .remove-employee {
      margin-top: 20px;
      button {
        border: none;
        outline: none;
        background-color: white;
        color: crimson;
        padding: 10px 0;
      }
    }
  }
}
</style>