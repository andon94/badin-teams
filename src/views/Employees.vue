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
        <BubbleContainer :employees="teamMembers"/>
      </div>
      <div class="list">
        <div class="team-name"
             v-if="team"
             @click="handleTeamClick">
          {{team.name}}
        </div>
        <EmployeeList :employees="teamMembers"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
      position: 0
    }
  },
  mounted () {
    this.fetchTeam(this.$route.query.id)
    this.fetchTeamMembers(this.$route.query.id)
  },
  computed: {
    ...mapGetters(['team', 'teamMembers']),
  },
  methods: {
    ...mapActions(['fetchTeam', 'fetchTeamMembers']),
    setPosition (val) {
      this.position = val
    },
    handleTeamClick () {
      this.$router.push({path:'/team/:id', query:{id: this.team.id}})
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
