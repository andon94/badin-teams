<template>
<div class="bubble"
     :style="`top: ${bubble.position.top}px; left:${bubble.position.left}px;`"
     @click="handleBubbleClick">
  <div v-if="bubble.img">
    <div class="img-wrapper">
      <img :src="`${baseUrl}/${bubble.img}`">
    </div>
    <p class="bubble-name">{{bubbleData}}</p>
  </div>
  <p v-else
     class="name">
    {{bubbleData}}
  </p>
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
  data () {
    return {
      baseUrl: process.env.VUE_APP_API_BASE_URL
    }
  },
  computed: {
    bubbleData () {
      console.log(this.bubble)
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
  // background: $light;
  color: $dark;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;

  font-weight: bold;

  transition: all ease-in 0.2s;

  // border-left: 1px solid rgba(255, 255, 255, 0.3);
  // border-top: 1px solid rgba(255, 255, 255, 0.3);
  // box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media (min-width: 768px) {
    transform: translate(-50%, -50%) scale(0.8);
  }

  @media (min-width: 1210px) {
    font-size: 13px;
    transform: translate(-50%, -50%) scale(1);
    &:hover {
      transform: translate(-50%, -50%) scale(2);
      background: none;
      border-left: none;
      border-top: none;
      box-shadow: none;
      overflow: visible;
      // box-shadow: 0 0 2px 2px $badin-color;
      z-index: 10;

      &::before {
        content: '';
        width: 150px;
        height: 150px;
        border-radius: 50%;
        // background-color: rbga(#272932, 0.5);
        background: rgba($badin-color, 0.6);
        position: absolute;
        z-index: -1;
      }


      .bubble-name {
        display: block;
        color: pink;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        white-space: nowrap;
      }

      .bubble-name, .name {
        color: $white;
      }
    }
  }

  .img-wrapper {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80px;
      height: 80px;
    }
  }

  .bubble-name {
    display: none;
    margin-top: 5px;
  }

  .name {
    color: $white;
  }

}
</style>