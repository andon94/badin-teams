<template>
  <div class="colective employees">
    <ViewNavigator @setPosition="setPosition"/>
    <div class="colective-content"
         :class="{'rotate': position}">
      <div class="bubbles face">
        <div class="team-name"
             @click="handleTeamClick">
          <div v-if="team">
            {{team.name}}
          </div>
        </div>
        <BubbleContainer :employees="teamMembers"/>
      </div>
      <div class="list back">
        <div class="team-name"
             v-if="team"
             @click="handleTeamClick">
          {{team.name}}
        </div>
        <EmployeeList :employees="teamMembers"
                      :loader="loader"/>
      </div>
    </div>
    <div class="heading-container">
      <div class="heading">Badinsoft</div>
      <div class="caption">Teams</div>
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
      position: 0,
      loader: true
    }
  },
  mounted () {
    this.setPosition()
    this.fetchTeam(this.$route.query.id)
    this.fetchTeamMembers(this.$route.query.id)
      .then(() => {
        this.loader = false
      })
      .catch(err => {
        this.loader = false
        console.log(err)
      })
  },
  computed: {
    ...mapGetters(['team', 'teamMembers']),
  },
  methods: {
    ...mapActions(['fetchTeam', 'fetchTeamMembers']),
    setPosition () {
      if (this.$route.query.list === 'true') this.position = true
      else this.position = false
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
