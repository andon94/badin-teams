<template>
  <li class="employee"
      @click="selectEmployee(employee)">
    <div class="employee-container">
      <div class="employee-name">
        {{employee.name}}
      </div>
      <div class="employee-title">
        {{employee.title}}
      </div>
    </div>
    <div class="img-container">
      <div></div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Employee',
  props: {
    employee: {
      type: Object,
      default: null
    }
  },
  methods: {
    selectEmployee(employee) {
      this.$store.commit('setSelectedEmployee', employee)
    }
  }
}
</script>

<style scoped lang="scss">
.employee {
  margin-bottom: 10px;
  list-style-type: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .employee-container {
    margin-right: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .employee-name {
      font-weight: bold;
    }
    .employee-title {
      font-size: 14px;
    }
  }

  .img-container {
    & > div {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: pink;
    }
  }
}
</style>