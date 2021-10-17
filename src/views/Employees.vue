<template>
  <div class="teams">
    <ViewNavigator @setPosition="setPosition"/>
    <div class="teams-content"
         :style="{'margin-left': position}">
      <div class="bubbles">
        <div class="team-name"
             v-if="team"
             @click="handleTeamClick">
          {{team.name}}
        </div>
        <BubbleContainer :employees="employees"/>
      </div>
      <div class="list">
        <div class="team-name"
             v-if="team"
             @click="handleTeamClick">
          {{team.name}}
        </div>
        <EmployeeList :employees="employees"/>
      </div>
    </div>
  </div>
</template>

<script>
import { teamsApi } from '../services/teams.js'
import ViewNavigator from '../components/Teams/ViewNavigator.vue'
import BubbleContainer from '../components/Teams/BubbleComponents/BubbleContainer.vue'
import EmployeeList from '../components/Teams/ColectiveComponents/EmployeeComponents/EmployeeList.vue'

export default {
  name: 'Employees',
  components: {
    ViewNavigator,
    BubbleContainer,
    EmployeeList
  },
  data () {
    return {
      position: 0,
      employees: [],
      team: {}
    }
  },
  mounted () {
    this.fetchTeam()
    this.fetchTeamMembers()
  },
  methods: {
    setPosition (val) {
      this.position = val
    },
    handleTeamClick () {
      this.$router.push({path:'/team/:id', query:{id: this.team.id}})
    },
    fetchTeamMembers () {
      teamsApi.fetchTeamMembers(this.$route.query.id)
        .then(res => {
          this.employees = [...res]
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchTeam () {
      teamsApi.fetchTeam(this.$route.query.id)
        .then(res => {
          this.team = {...res}
        })
        .catch(err => {
          console.log(err)
        })
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
      .team-name {
        width: 100%;
        font-weight: bold;
        margin: 20px 0;
      }
    }
    .bubbles {
      .team-name {
        text-align: center;
      }
    }
    .list {
      .team-name {
        padding-left: 10px;
      }
    }
  }
}
</style>
