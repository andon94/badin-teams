<template>
    <div class="view-navigator">
    <button @click="handleButtonClick('rotateY(0)')"
            :class="{'active': position === 'rotateY(0)'}">
      Bubbles
    </button>
    <button @click="handleButtonClick('rotateY(190deg)')"
            :class="{'active': position === 'rotateY(190deg)'}">
      List
    </button>
  </div>
</template>

<script>
export default {
  name: 'ViewNavigator',
  data () {
    return {
      position: 'rotateY(0)'
    }
  },
  methods: {
    handleButtonClick (val) {
      this.position = val
      this.$emit('setPosition', val)
    }
  }
}
</script>

<style scoped lang="scss">
.view-navigator {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px auto;
  button {
    border: none;
    background: none;
    outline: none;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 16px;
    color: $light;
    cursor: pointer;

    &.active {
      color: $active;
    }
  }
}
</style>