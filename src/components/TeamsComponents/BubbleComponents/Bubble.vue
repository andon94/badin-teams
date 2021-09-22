<template>
<div class="bubble"
     :style="`top: ${this.bubble.position.top}px; left:${this.bubble.position.left}px;`"
     @click="handleBubbleClick">
  {{this.bubble.name}}
</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Bubble',
  props: {
    bubble: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapGetters(['selectedTeam'])
  },
  methods: {
    ...mapActions(['fetchTeamEmployees']),
    ...mapMutations(['setTeam', 'setSelectedEmployee']),
    handleBubbleClick() {
      if (Object.keys(this.$route.query).length === 0) {
        this.$router.push({path:'/teams', query:{id: this.bubble.id}})
        this.setTeam(this.bubble)
        this.fetchTeamEmployees(this.bubble.id)
      } else {
        this.setSelectedEmployee(this.bubble)
        this.$router.push({ path: `/employee-profile/${this.bubble.id}`})
        this.setTeam({})
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bubble {
  position: absolute;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%) scale(0.6);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 10px;
  background: white;
  border-radius: 50%;
  color: #16161d;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;

  transition: all ease-in 0.2s;
}
</style>