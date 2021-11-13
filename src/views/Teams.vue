<template>
  <div class="colective"
       :class="{'no-scroll': !position}">
    <ViewNavigator @setPosition="setPosition"/>
    <div class="colective-content"
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
@import '@/assets/css/bubble-pages.scss';
</style>
