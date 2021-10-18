<template>
  <BaseInput :placeholder="placeholder"
             v-model="filter"
             class="filter-input"/>
</template>

<script>
import BaseInput from './BaseInput.vue'

export default {
  name: 'BaseFilter',
  components: {
    BaseInput
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    dataArr: {
      type: Array,
      default: () => []
    },
    dataProperty: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      filter: '',
      filteredArr: []
    }
  },
  watch: {
    dataArr () {
      this.$emit('filteredData', this.dataArr)
    },
    filter () {
      if (this.filter) {
        this.filterArr()
        this.$emit('filteredData', this.filteredArr)
      } else this.$emit('filteredData', this.dataArr)
    }
  },
  methods: {
    filterArr () {
      let data = []
      this.dataArr.forEach(element => {
        if (element[this.dataProperty].toLowerCase().includes(this.filter.toLowerCase())) data.push(element)
      })
      this.filteredArr = [...data]
    }
  }
}
</script>

<style scoped lang="scss">
.filter-input {
  width: calc(100% - 20px);
}
</style>