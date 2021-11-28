<template>
  <div class="textarea-input">
    <!-- prekopiraj labelu iz baseInput-a -->
    <textarea cols="30" rows="10"
              :placeholder="placeholder"
              :value="value"
              @input="updateValue($event.target.value)"
              :spellcheck="false">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'TextareaInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped lang="scss">
.textarea-input {
  margin: 15px 0;
  textarea {
    max-width: 100%;
    min-width: 100%;
    background: transparent;
    // border: 1px solid $light;
    background-color: rgba($light, 0.1);
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: $light;
    &::placeholder {
      color: $light;
    }
    &:focus {
      outline: none;
      // border: 1px solid $light;
    }
  }
}
</style>