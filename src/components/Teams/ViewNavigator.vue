<template>
    <div class="view-navigator">
    <button @click="handleButtonClick(0)"
            :class="{'active': !position}">
      Bubbles
    </button>
    <button @click="handleButtonClick('-100%')"
            :class="{'active': position}">
      List
    </button>
  </div>
</template>

<script>
export default {
  name: 'ViewNavigator',
  data () {
    return {
      position: 0
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

    &.active {
      color: $active;
    }
  }
}
</style>