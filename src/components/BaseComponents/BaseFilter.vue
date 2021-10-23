<template>
  <div class="filter">
    <BaseInput :placeholder="filterByPlaceholder"
               v-model="filter"
               class="filter-input"/>
    <div class="filter-container">
      <div class="filters">
        <div class="filter"
            v-for="(filter, i) in filterProperties" :key="i"
            @click="setFilter(filter)"
            :class="filter === filterProperty ? 'active' : ''">
          {{filter.replace(/([A-Z])/g, " $1").toLowerCase()}}
        </div>
      </div>
    </div>
  </div>
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
    filterProperties: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      filter: '',
      filterProperty: '',
      filteredArr: []
    }
  },
  mounted () {
    if (!this.filterProperty) this.filterProperty = this.filterProperties[0]
  },
  computed: {
    filterByPlaceholder () {
      const word = this.filterProperty.replace(/([A-Z])/g, " $1").toLowerCase();
      return `${this.placeholder} by ${word}`
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
    setFilter (val) {
      this.filterProperty = val
    },
    filterArr () {
      let data = []
      this.dataArr.forEach(element => {
        if (element[this.filterProperty].toLowerCase().includes(this.filter.toLowerCase())) data.push(element)
      })
      this.filteredArr = [...data]
    }
  }
}
</script>

<style scoped lang="scss">
.filter {
  &-container {
    display: flex;
    font-size: 14px;
    margin-top: -10px;
    .filters {
      margin-left: 10px;
      display: flex;
      flex-wrap: wrap;
      .filter {
        margin-right: 15px;
        font-weight: bold;
        &.active {
          color: pink;
        }
      }
    }
  }

  &-input {
    width: calc(100% - 20px);
  }
}
</style>