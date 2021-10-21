<template>
  <li class="client">
    <div class="client-container">
      <div class="client-container-name">
        <div>
          {{client.name}}
        </div>
      </div>
      <div class="client-container-about">
        <div>
          {{client.about}}
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
  name: 'Client',
  props: {
    client: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.client {
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
      & > div {
        color: gray;
        font-weight: normal;
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