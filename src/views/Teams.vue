<template>
  <div class="teams">
    <BubbleContainer />
    <TeamList />
    <EmployeeList v-if="$route.fullPath !== '/teams'"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import BubbleContainer from '../components/TeamsComponents/BubbleComponents/BubbleContainer.vue'
import TeamList from '../components/TeamsComponents/ColectiveComponents/TeamComponents/TeamList.vue'
import EmployeeList from '../components/TeamsComponents/ColectiveComponents/EmployeeComponents/EmployeeList.vue'

export default {
  name: 'teams',
  components: {
    BubbleContainer,
    TeamList,
    EmployeeList,
  },
  created () {
    this.setTeam({})
  },
  methods: {
    ...mapMutations(['setTeam']),
  }
}
</script>
