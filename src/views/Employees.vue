<template>
  <div class="colective">
    <ViewNavigator @setPosition="setPosition"/>
    <div class="colective-content"
         :style="{'margin-left': position}">
      <div class="bubbles">
        <div class="team-name"
             @click="handleTeamClick">
          <div v-if="team">
            {{team.name}}
          </div>
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
      this.$router.push({path:'/team-profile/:id', query:{id: this.team.id}})
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/bubble-pages.scss';
</style>
