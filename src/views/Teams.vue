<template>
  <div class="colective">
       <!-- :class="{'no-scroll': !position}"> -->
    <ViewNavigator @setPosition="setPosition"/>
    <div class="colective-content"
         :style="{'transform': position}">
      <BubbleContainer :teams="teams"
                       class="bubbles face"/>
      <TeamList :teams="teams"
                :teamsFilter="true"
                :loader="loader"
                class="list back"/>
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
      position: 0,
      loader: true
    }
  },
  mounted () {
    this.fetchTeams()
      .then(() => {
        this.loader = false
      })
      .catch(err => {
        this.loader = false
        console.log(err)
      })
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
