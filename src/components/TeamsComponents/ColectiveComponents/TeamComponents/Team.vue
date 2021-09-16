<template>
  <li class="team"
      @click="setTeam()">
    {{team}}
  </li>
</template>

<script>
export default {
  name: 'Employee',
  props: {
    team: {
      type: String,
      default: null
    }
  },
  methods: {
    setTeam() {
      this.$store.commit('setTeam', this.team)
    }
  }
}
</script>

<style scoped lang="scss">
li {
  list-style-type: none;
  margin: 10px 0 5px 0;
  padding: 0 10px;
  font-weight: bold;
  display: inline-block;
}
</style>