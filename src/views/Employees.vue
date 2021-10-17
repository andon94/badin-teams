<template>
  <div class="teams">
    <ViewNavigator @setPosition="setPosition"/>
    <div class="teams-content"
         :style="{'margin-left': position}">
      <!-- <BubbleContainer :employees="employees"
                       class="bubbles"/> -->
      <EmployeeList :employees="employees"
                    class="list"/>
    </div>
  </div>
</template>

<script>
import { teamsApi } from '../services/teams.js'
import ViewNavigator from '../components/Teams/ViewNavigator.vue'
// import BubbleContainer from '../components/Teams/BubbleComponents/BubbleContainer.vue'
import EmployeeList from '../components/Teams/ColectiveComponents/EmployeeComponents/EmployeeList.vue'

export default {
  name: 'Teams',
  components: {
    ViewNavigator,
    // BubbleContainer,
    EmployeeList
  },
  data () {
    return {
      position: 0,
      employees: []
    }
  },
  mounted () {
    teamsApi.fetchTeamMembers(this.$route.query.id)
      .then(res => {
        console.log(res)
        // odradi dodavanje zaposlenog u tim, pa nastavi ovde
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    setPosition (val) {
      this.position = val
    }
  }
}
</script>

<style scoped lang="scss">
.teams {
  overflow: hidden;
  min-height: 100vh;

  &-content {
    display: flex;
    flex-direction: row;
    align-content: center;
    transition: all linear 0.2s;
    .bubbles, .list {
      min-width: 100vw;
    }
  }
}
</style>
