<template>
    <div class="view-navigator">
    <button @click="handleButtonClick(false)"
            :class="{'active': this.$route.query.list === 'false'}">
      Bubbles
    </button>
    <button @click="handleButtonClick(true)"
            :class="{'active': this.$route.query.list === 'true'}">
      List
    </button>
  </div>
</template>

<script>
export default {
  name: 'ViewNavigator',
  data () {
    return {
      position: false
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
    if (window.innerWidth < 1024) this.handleButtonClick(true)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    handleButtonClick (val) {
      if (!val && this.$route.query.list !== 'false') this.$router.push({query: { ...this.$route.query, list: val }})
      else if (val && this.$route.query.list !== 'true') this.$router.push({query: { ...this.$route.query, list: val }})
      this.$emit('setPosition')
    },
    onResize () {
      if (window.innerWidth < 1024) this.handleButtonClick(true)
    }
  }
}
</script>

<style scoped lang="scss">
.view-navigator {
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 60px auto 20px;
  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 16px;
    color: $light;
    cursor: pointer;
    border: 2px solid $light;
    background: dark;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;

    &.active {
      border: 2px solid $active;
    }

    &:first-of-type {
      margin-right: 20px;
    }

    &:hover {
      color: $badin-color;
      border: 2px solid $active;
    }
  }
}
</style>