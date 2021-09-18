<template>
  <div class="teams">
    <BubbleContainer />
    <TeamList />
    <EmployeeList v-if="!this.$store.state.employees.selectedEmployee.name"/>
    <!-- <EmployeeProfile v-else/> -->
  </div>
</template>

<script>
import BubbleContainer from '../components/TeamsComponents/BubbleComponents/BubbleContainer.vue'
import TeamList from '../components/TeamsComponents/ColectiveComponents/TeamComponents/TeamList.vue'
import EmployeeList from '../components/TeamsComponents/ColectiveComponents/EmployeeComponents/EmployeeList.vue'
// import EmployeeProfile from './EmployeeProfile.vue'

export default {
  name: 'teams',
  components: {
    BubbleContainer,
    TeamList,
    EmployeeList,
    // EmployeeProfile
  }
}
</script>
