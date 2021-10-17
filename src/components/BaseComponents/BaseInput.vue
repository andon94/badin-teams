<template>
  <div class="base-input">
    <div class="input-container">
      <input :type="type"
             :class="{'no-right-border-radius': buttonInput }"
             :value="value"
             @input="updateValue($event.target.value)"
             @focus="riseLabel"
             @blur="lowerLabel"
             v-if="!name">
      <input v-else
             :type="type"
             :class="{'no-right-border-radius': buttonInput }"
             :value="value[name]"
             @input="updateValue($event.target.value)"
             @focus="riseLabel"
             @blur="lowerLabel">
      <span class="placeholder"
            :class="{'placeholder-label': placeholderLabel}"
            @click="placeholderLabel = true">
        {{placeholder}}
      </span>
      <div v-if="selectArr !== null"
           @click="selectIsOpen=!selectIsOpen"
           class="dropdown-button">
        <svg-icon type="mdi" :path="path.chevronUp"
                  :class="{'rotate-180': selectIsOpen }">
        </svg-icon>
      </div>
      <button v-if="buttonInput"
              class="input-button"
              ref="inputButton"
              @click="$emit('btnClick')">
        Add
      </button>
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
import { mdiChevronUp } from '@mdi/js'

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
    buttonInput: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectIsOpen: false,
      placeholderLabel: false,
      path: {
        chevronUp: mdiChevronUp
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
    }
  },
  methods: {
    setOption (option) {
      this.$emit('input', option)
      this.placeholderLabel = true
      this.selectIsOpen = false
    },
    updateValue: function (value) {
      this.$emit('input', value)
    },
    riseLabel () {
      this.placeholderLabel = true
      this.selectIsOpen = false
    },
    lowerLabel () {
      if (!this.value && !this.option) this.placeholderLabel = false
      this.selectIsOpen = false
    }
  }
}
</script>

<style scoped lang="scss">
.base-input {
  margin: 20px 0;
  position: relative;
  .input-container {
    position: relative;

    display: flex;

    input {
      width: 100%;
      padding: 10px 15px;
      border: 3px solid black;
      border-bottom-left-radius: 10px;
      border-top-right-radius: 10px;
      outline: none;
      padding-right: 25px;
      font-weight: bold;

      &.no-right-border-radius {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    .placeholder {
      position: absolute;
      padding-top: 12px;
      padding-left: 10px;
      opacity: 0.8;
      transition: all linear 0.1s;
      touch-action: none;
      font-size: 14px;

      &.placeholder-label {
        transform: translate(10px, -10px);
        padding: 3px;
        opacity: 1;
        z-index: 9999;
        background: white;
        font-size: 12px;
      }
    }

    .dropdown-button {
      background: none;
      outline: none;
      border: none;

      position: absolute;
      top: 20%;
      right: 5px;
      svg {
        &.rotate-180 {
          transform: rotate(-180deg);
        }
      }
    }

    .input-button {
      background: black;
      outline: none;
      border: none;
      color: white;
      font-weight: bold;
      padding: 0 10px;
    }

  }

  .select-container {
    width: 100%;
    padding: 10px 15px;
    border: 3px solid black;
    border-radius: 10px;
    margin-top: 10px;
    position: absolute;
    background: white;
    z-index: 10;

    ul {
      li {
        list-style-type: none;
        margin: 5px 0;
        padding: 5px 0;
        font-weight: bold;
      }
    }
  }
}
</style>