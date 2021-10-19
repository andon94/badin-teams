<template>
  <div class="teams">
    <ViewNavigator @setPosition="setPosition"/>
    <div class="teams-content"
         :style="{'margin-left': position}">
      <BubbleContainer :teams="teams"
                       class="bubbles"/>
      <TeamList :teams="teams"
                :teamsFilter="true"
                class="list"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ViewNavigator from '../components/Teams/ViewNavigator.vue'
import BubbleContainer from '../components/Teams/BubbleComponents/BubbleContainer.vue'
import TeamList from '../components/Teams/ColectiveComponents/TeamComponents/TeamList.vue'

export default {
  name: 'Teams',
  components: {
    ViewNavigator,
    BubbleContainer,
    TeamList,
  },
  data () {
    return {
      position: 0
    }
  },
  mounted () {
    this.fetchTeams()
  },
  computed: {
    ...mapGetters(['teams'])
  },
  methods: {
    ...mapActions(['fetchTeams']),
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
