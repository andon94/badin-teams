<template>
  <div class="edit-teams">
    <TeamList :teams="teams"
              :teamsFilter="true"
              :loader="loader"/>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import TeamList from '../components/Teams/ColectiveComponents/TeamComponents/TeamList.vue'

export default {
  name: 'EditTeams',
  components: {
    TeamList
  },
  data () {
    return {
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
        this.setError(err)
      })
  },
  computed: {
    ...mapGetters(['teams'])
  },
  methods: {
    ...mapMutations(['setError']),
    ...mapActions(['fetchTeams'])
  }
}
</script>

<style scoped lang="scss">
.edit-teams {
  padding-top: 40px;
}
</style>
