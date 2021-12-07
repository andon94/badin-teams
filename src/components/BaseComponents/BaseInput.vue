<template>
  <div class="base-input">
    <div class="input-container"
         v-click-outside="handleOutsideClick">
      <ValidationProvider v-slot="{ errors }"
                          :rules="rules"
                          class="validator">
        <input :type="type"
              :value="value"
              ref="baseInput"
              @input="updateValue($event.target.value)"
              @focus="riseLabel"
              @blur="lowerLabel"
              v-if="!name">
        <input v-else
              :type="type"
              :value="value[name]"
              ref="baseInput"
              readonly="true"
              @focus="riseLabel"
              @blur="lowerLabel"
              @input="updateValue($event.target.value)">
        <span class="error">
          {{errors[0]}}
        </span>
      </ValidationProvider>
      <span class="placeholder"
            :class="{'placeholder-label': labelPosition || placeholderLabel}"
            @click="riseLabel">
        {{customPlaceholder}}
      </span>
      <div v-if="name && value"
           @click="clearValue"
           class="trash-button">
        <svg-icon type="mdi"
                  :path="path.trash">
        </svg-icon>
      </div>
      <div v-if="selectArr !== null"
           @click="toggleDropdown"
           class="dropdown-button">
        <svg-icon type="mdi"
                  :path="path.chevronUp"
                  :class="{'rotate-180': selectIsOpen }">
        </svg-icon>
      </div>
    </div>
    <div class="select-container"
         v-if="selectArr !== null && selectIsOpen">
      <ul v-if="!name">
        <li v-for="(option, i) in selectArr" :key="i"
            @click="setOption(option)">
          {{option}}
        </li>
      </ul>
      <ul v-else>
        <li v-for="(option, i) in selectArr" :key="i"
            @click="setOption(option)">
          {{option.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '../../assets/customDirectives/customDirectives.js'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiChevronDown, mdiTrashCanOutline } from '@mdi/js'

export default {
  name: 'BaseInput',
  components: {
    SvgIcon
  },
  props: {
    value: {
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    selectArr: {
      type: Array,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    rules: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      selectIsOpen: false,
      placeholderLabel: false,
      path: {
        chevronUp: mdiChevronDown,
        trash: mdiTrashCanOutline
      }
    }
  },
  computed: {
    selectOptions () {
      const arr = []
      if (this.name && this.selectArr.length) {
        this.selectArr.forEach(selectEl => {
          const data = {
            name: selectEl[this.name],
            id: selectEl.id
          }
          arr.push(data)
        })
      }
      return arr || this.selectArr
    },
    customPlaceholder () {
      if (this.name) {
        if (!this.value) return `Select a ${this.placeholder}`
        else return this.placeholder
      }
      else return this.placeholder
    },
    labelPosition () {
      if (this.value) return true
      else return false
    }
  },
  methods: {
    setOption (option) {
      this.$emit('input', option)
      // this.placeholderLabel = true
      this.selectIsOpen = false
    },
    updateValue: function (value) {
      this.$emit('input', value)
    },
    riseLabel () {
      if (!this.name) {
        this.placeholderLabel = true
        this.selectIsOpen = false
      }
    },
    lowerLabel () {
      if (!this.value && !this.option) this.placeholderLabel = false
      this.selectIsOpen = false
    },
    handleOutsideClick () {
      if (this.selectIsOpen) this.selectIsOpen = false
    },
    clearValue () {
      this.updateValue('')
      this.placeholderLabel = false
    },
    toggleDropdown () {
      if (this.selectArr.length) this.selectIsOpen = !this.selectIsOpen
    }
  }
}
</script>

<style scoped lang="scss">
.base-input {
  position: relative;
  margin-top: 15px;
  .input-container {
    position: relative;
    padding-bottom: 20px;
    display: flex;

    .validator {
      width: 100%;
    }

    input {
      width: 100%;
      padding: 15px;
      outline: none;
      padding-right: 25px;
      font-weight: bold;
      background: transparent;
      border: none;
      color: $light;
      backdrop-filter: blur(10px);
      background-color: rgba($light, 0.1);
      border-radius: 5px;
    }

    .error {
      position: absolute;
      bottom: 0;
      left: 0;
      font-weight: bold;
      color: $error;
    }

    .placeholder {
      position: absolute;
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

    .dropdown-button {
      position: absolute;
      top: 15%;
      right: 5px;
      cursor: pointer;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      svg {
        color: $light;
        &.rotate-180 {
          transform: rotate(-180deg);
        }
      }
    }

    .trash-button {
      position: absolute;
      color: $light;
      top: 9px;
      right: 30px;
      transform: scale(0.9);
    }

  }

  .select-container {
    padding: 10px 15px;
    border-radius: 10px;
    width: 100%;
    margin-top: -10px;
    position: absolute;
    background: $light;
    z-index: 10;
    box-shadow: $select-shadow;
    ul {
      li {
        list-style-type: none;
        margin: 5px 0;
        padding: 5px 0;
        font-weight: bold;
        color: $dark;
        cursor: pointer;
      }
    }
  }
}
</style>