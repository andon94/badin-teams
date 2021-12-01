<template>
  <button :type="type"
          class="base-button"
          @click="$emit('click')"
          :disabled="disabled">
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.base-button {
  border-radius: 5px;
  padding: 10px 20px;
  background: $badin-color;
  color: $light;
  outline: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  &:hover {
    background: darken($badin-color, 5%)
  }
}
</style>