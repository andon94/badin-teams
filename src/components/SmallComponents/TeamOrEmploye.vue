<template>
  <div class="team-or-employee">
    <div @click="pushRouteTo(`/create-teams`)"
         :class="route === `/create-teams` ? 'current-route' : ''">
      Create a Badin team
    </div>
    <div @click="pushRouteTo(`/add-employee`)"
         :class="route === `/add-employee` ? 'current-route' : ''">
      Add a Badin employee
    </div>
  </div>
</template>


<script>
export default {
  name: 'TeamOrEmployee',
  data() {
    return {
      route: ''
    }
  },
  mounted() {
    this.route = this.$route.path
  },
  watch: {
    '$route.path' : {
      handler: function () {
        this.route = this.$route.path
      },
      deep:true
    }
  },
  methods: {
    pushRouteTo(val) {
      if (this.route !== val) this.$router.push({ path: val})
    },
  }
}
</script>

<style scoped lang="scss">
.team-or-employee {
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    text-align: center;
    background-color: black;
    color: white;
    font-weight: bold;
    font-size: 14px;
    padding: 10px;
    border-radius: 10px;
    max-width: 40%;

    &.current-route {
      color: crimson;
    }
  }
}
</style>