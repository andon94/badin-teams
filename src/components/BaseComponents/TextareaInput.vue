<template>
  <div class="textarea-input">
    <ValidationProvider v-slot="{ errors }"
                        :rules="rules"
                        class="validator">
      <textarea cols="30" rows="10"
                :placeholder="placeholder"
                :value="value"
                @input="updateValue($event.target.value)"
                :spellcheck="false">
      </textarea>
      <span class="error">
        {{errors[0]}}
      </span>
    </ValidationProvider>

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
    },
    rules: {
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
  margin: 20px 0;
  position: relative;
  textarea {
    max-width: 100%;
    min-width: 100%;
    background: transparent;
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
    }
  }
  .error {
    position: absolute;
    bottom: -15px;
    left: 0;
    font-weight: bold;
    color: $error;
  }
}
</style>