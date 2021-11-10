<template>
<div class="bubble"
     :style="`top: ${bubble.position.top}px; left:${bubble.position.left}px;`"
     @click="handleBubbleClick">
  {{bubbleData}}
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
  computed: {
    bubbleData () {
      if (this.$route.name === 'Teams') return this.bubble.name
      else if (this.$route.name === 'Employees') return `${this.bubble.firstName} ${this.bubble.lastName}`
      else return ''
    }
  },
  methods: {
    handleBubbleClick () {
      if (this.$route.name === 'Teams') this.$router.push({path:'/employees/:id', query:{id: this.bubble.id}})
      else if (this.$route.name === 'Employees') this.$router.push({path:'/employee-profile/:id', query:{id: this.bubble.id}})
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
  background: $light;
  color: $dark;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;

  font-weight: bold;

  transition: all ease-in 0.2s;

  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
}
</style>