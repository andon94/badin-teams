<template>
  <div class="select-input">
    <div class="input-container">
      <input type="text"
            :placeholder="placeholder"
            v-model="inputValue"
            :class="{'no-right-border-radius': buttonInput }"
            v-on:keyup.enter="emitValue">
      <div v-if="selectArr !== null"
              @click="selectIsOpen=!selectIsOpen"
              class="dropdown-button">
        <svg-icon type="mdi" :path="path.chevronUp"
                  :class="{'rotate-180': selectIsOpen }">
        </svg-icon>
      </div>
      <button v-if="buttonInput"
              class="input-button"
              @click="emitValue"
              ref="inputButton">
        Add
      </button>
    </div>
    <div class="select-container"
         v-if="selectArr !== null && selectIsOpen">
      <ul>
        <li v-for="(option, i) in selectArr" :key="i"
            @click="setOption(option)">
          {{option}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiChevronUp } from '@mdi/js'

export default {
  name: 'SelectInput',
  components: {
    SvgIcon
  },
  props: {
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
      defaul: false
    }
  },
  data() {
    return {
      inputValue: '',
      selectIsOpen: false,
      path: {
        chevronUp: mdiChevronUp
      }
    }
  },
  watch: {
    inputValue() {
      if (!this.buttonInput) this.$emit("inputValue", this.inputValue)
    }
  },
  methods: {
    setOption(option) {
      this.inputValue = option
      this.selectIsOpen = false
    },
    emitValue () {
      if (this.inputValue !== '') {
        this.$emit('inputValue', this.inputValue)
        if (this.buttonInput) this.inputValue = ''
      }
    }
  }

}
</script>

<style scoped lang="scss">
.select-input {
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