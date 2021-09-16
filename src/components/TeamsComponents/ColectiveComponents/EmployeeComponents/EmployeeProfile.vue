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
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EmployeeProfile',
  computed: {
    ...mapGetters(['selectedEmployee'])
  },
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
  }
}
</style>