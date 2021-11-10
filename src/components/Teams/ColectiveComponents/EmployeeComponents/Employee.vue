<template>
  <div class="employee">
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
    <div class="employee-image">
      <img v-if="employee.imageViewPath"
           :src="`${baseUrl}/${employee.imageViewPath}`">
      <div v-else
           class="employee-image-placeholder"></div>
    </div>
  </div>
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
      imgClicked: false,
      baseUrl: process.env.VUE_APP_API_BASE_URL
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

  .employee-image {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    &-placeholder {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: pink;
    }
  }
}
</style>