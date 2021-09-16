<template>
<div class="bubble"
     :style="`top: ${this.bubble.position.top}px; left:${this.bubble.position.left}px;`"
     @click="handleBubbleClick">
  {{this.bubble.name}}
</div>
</template>

<script>
export default {
  name: 'Bubble',
  props: {
    bubble: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleBubbleClick() {
      if (!this.$store.state.teams.team) this.$store.commit('setTeam', this.bubble.name)
      else this.$store.commit('setSelectedEmployee', this.bubble)
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