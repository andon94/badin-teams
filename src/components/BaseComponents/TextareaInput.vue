<template>
  <div class="textarea-input">
    <!-- prekopiraj labelu iz baseInput-a -->
    <textarea cols="30" rows="10"
              :placeholder="placeholder"
              :value="value"
              @input="updateValue($event.target.value)">
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
    border: 3px solid black;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
  }
}
</style>