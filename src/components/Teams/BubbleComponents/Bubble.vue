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
  background: white;
  border-radius: 50%;
  color: #16161d;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;

  transition: all ease-in 0.2s;
}
</style>