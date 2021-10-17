<template>
  <button :type="type"
          class="base-button"
          @click="$emit('click')">
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.base-button {
  background: black;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>