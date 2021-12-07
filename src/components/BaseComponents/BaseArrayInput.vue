<template>
  <div class="array-input">
    <BaseInput :placeholder="placeholder"
               :name="name"
               :selectArr="selectArr"
               v-model="value"
               @input="handleInput"/>
    <div class="array-input-elements">
      <div v-for="(data, i) in finalArr" :key="i"
           class="array-input-element"
           @click="handleElementClick(data)">
        <span>{{data[name]}}</span>
        <span class="icon">
          <svg-icon type="mdi" :path="path.close"></svg-icon>
        </span>
      </div>
      <div v-if="!finalArr.length" class="placeholder">
        {{`No ${placeholder}s selected`}}
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'

import BaseInput from './BaseInput.vue'

const EMPTY_ARR = {
  type: Array,
  default: () => []
}

const EMPTY_STRING = {
  type: String,
  default: ''
}

export default {
  name: 'ArrayInput',
  components: {
    BaseInput,
    SvgIcon
  },
  props: {
    dataArr: EMPTY_ARR,
    selectArr: EMPTY_ARR,
    placeholder: EMPTY_STRING,
    name: EMPTY_STRING
  },
  data () {
    return {
      value: '',
      finalArr: [],
      path: {
        close: mdiClose
      }
    }
  },
  watch: {
    dataArr () {
      this.finalArr = this.dataArr
    },
    finalArr () {
      this.$emit('finalArr', this.finalArr)
    }
  },
  methods: {
    handleElementClick (val) {
      this.finalArr = this.finalArr.filter(arrElement => arrElement.id !== val.id)
    },
    handleInput () {
      const valueExists = this.finalArr.find(arrElement => arrElement.id === this.value.id)
      if (!valueExists && this.value) {
        this.finalArr.push(this.value)
      }
      this.value = ''
    }
  }
}
</script>

<style scoped lang="scss">
.array-input {
  /deep/ .base-input {
    input {
      cursor: pointer;
    }
  }
  &-elements {
    min-height: 18px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;


    .array-input-element, .placeholder{
      cursor: pointer;
      font-size: 12px;
      color: $light;
      // border: 1px solid $light;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      padding: 0 5px;
      border-radius: 5px;
    }

    .placeholder {
      border: none;
      box-shadow: none;
      margin-top: -10px;
    }

    .array-input-element {
      font-size: 14px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 5px;
      background-color: #294870;

      &:hover {
        background-color: $error;
        color: $light;
      }

      .icon {
        margin-left: 3px;
        svg {
          transform: scale(0.6) translateY(3px);
        }
      }
    }
  }
}
</style>