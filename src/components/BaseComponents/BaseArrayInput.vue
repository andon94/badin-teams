<template>
  <div class="array-input">
    <div class="array-input-elements">
      <div v-for="(data, i) in finalArr" :key="i"
           class="array-input-element"
           @click="handleElementClick(data)">
        {{data[name]}}
      </div>
      <div v-if="!finalArr.length" class="placeholder">
        {{`No ${placeholder}s selected`}}
      </div>
    </div>
    <BaseInput :placeholder="placeholder"
               :name="name"
               :selectArr="selectArr"
               v-model="value"
               @input="handleInput"/>
  </div>
</template>

<script>
import BaseInput from './BaseInput.vue'
export default {
  name: 'ArrayInput',
  components: {
    BaseInput
  },
  props: {
    dataArr: {
      type: Array,
      default: () => []
    },
    selectArr: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: '',
      finalArr: []
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
    }
  }
}
</script>

<style scoped lang="scss">
.array-input {
  &-elements {
    min-height: 18px;
    margin-bottom: -5px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .array-input-element, .placeholder{
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      margin: 5px 15px 5px 0;
    }
  }
}
</style>