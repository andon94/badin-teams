<template>
  <div class="textarea-input">
    <ValidationProvider v-slot="{ errors }"
                        :rules="rules"
                        class="validator">
      <textarea cols="30" rows="10"
                :value="value"
                @input="updateValue($event.target.value)"
                @focus="riseLabel"
                @blur="lowerLabel"
                :spellcheck="false">
                <!-- :placeholder="placeholder" -->
      </textarea>
      <span class="error">
        {{errors[0]}}
      </span>
      <span class="placeholder"
            :class="{'placeholder-label': labelPosition || placeholderLabel}"
            @click="riseLabel">
        {{placeholder}}
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
  data () {
    return {
      placeholderLabel: false
    }
  },
  computed: {
    labelPosition () {
      if (this.value) return true
      else return false
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    },
    riseLabel () {
      this.placeholderLabel = true
    },
    lowerLabel () {
      if (!this.value && !this.option) this.placeholderLabel = false
    },
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

    @media (min-width: 1366px) {
      &:hover {
        background-color: rgba($light, 0.09);
      }
    }
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

  .placeholder {
    position: absolute;
    left: 0;
    padding-top: 15px;
    padding-left: 10px;
    opacity: 0.8;
    transition: all linear 0.1s;
    touch-action: none;
    font-size: 14px;
    pointer-events: none;
    color: $light;
    cursor: default;

    &.placeholder-label {
      transform: translate(5px, -19px);
      padding: 3px;
      opacity: 1;
      z-index: 10;
      font-size: 12px;
    }
  }
}
</style>