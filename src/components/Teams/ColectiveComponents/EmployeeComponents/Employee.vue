<template>
  <li class="employee">
    <div class="employee-container">
      <div class="employee-container-name">
        <div>
          {{employee.firstName}}
        </div>
        <div>
          {{employee.lastName}}
        </div>
        <div>
          {{employee.nickname}}
        </div>
      </div>
      <div class="employee-container-about">
        <label>Working area: </label>
        <div>
          {{employee.workingArea}}
        </div>
      </div>
      <div class="employee-container-about">
        <label>Seniority: </label>
        <div>
          {{employee.seniority}}
        </div>
      </div>
    </div>
    <div class="img-container">
      <!-- <div @click="openRemoveModal"> -->
      <div>
        <!-- <div v-if="$route.name === 'EditTeam' && imgClicked"
            @click="removeEmployeeFromTeam">
          remove
        </div> -->
      </div>
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
  data() {
    return {
      imgClicked: false
    }
  }
}
</script>

<style scoped lang="scss">
.employee {
  list-style-type: none;
  width: 100%;
  margin: 20px 0;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &-container {
    margin-right: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &-name, &-about {
      display: flex;
      flex-wrap: wrap;
    }

    &-name {
      margin-bottom: 15px;
      font-weight: bold;
      & > div {
        margin-right: 5px;
      }
    }

    &-about {
      margin: 5px 0;
      & > label {
        margin-right: 10px;
      }
      & > div {
        font-weight: bold;
      }
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: pink;

      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        padding: 5px;

      }
    }
  }
}
</style>