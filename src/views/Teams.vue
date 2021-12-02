<template>
  <div class="colective">
    <ViewNavigator @setPosition="setPosition"/>
    <div class="colective-content"
         :class="{'rotate': position}">
      <BubbleContainer :teams="teams"
                       class="bubbles face"/>
      <TeamList :teams="teams"
                :teamsFilter="true"
                :loader="loader"
                class="list back"/>

    </div>
    <div class="heading-container">
      <div class="heading">Badinsoft</div>
      <div class="caption">Teams</div>
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
