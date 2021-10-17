<template>
  <div class="employee-list">
    <!-- <div class="employee-list-container"
         v-if="$route.name === 'EditTeam'">
      <p class="employee-list-container-title">
        Show members of <span>{{selectedTeam.name}}</span> ({{allTeamEmployees.length}})
      </p>
      <div @click="setListHeight"
           class="dropdown-button">
        <svg-icon type="mdi" :path="path.chevronUp"
                  :class="{'rotate-180': listHeight }">
        </svg-icon>
      </div>
    </div> -->
    <!-- <ul :style="`height: ${listHeight}`"> -->
    <ul>
      <Employee v-for="employee in employees" :key="employee.id"
                :employee="employee" />
    </ul>
  </div>
</template>

<script>
// import { mapGetters, mapActions, mapMutations } from 'vuex'
// import SvgIcon from '@jamescoyle/vue-icon'
// import { mdiChevronUp } from '@mdi/js'
import Employee from './Employee.vue'

export default {
  name: 'EmployeeList',
  components: {
    // SvgIcon,
    Employee
  },
  props: {
    employees: {
      type: Array,
      default: () => []
    }
  },
  // data () {
  //   return {
  //     listHeight: '100%',
  //     path: {
  //       chevronUp: mdiChevronUp
  //     }
  //   }
  // },
  // mounted () {
  //   if (this.$route.name === 'EditEmployees') this.fetchEmployees()
  // },
  // watch: {
  //   selectedTeam() {
  //   console.log(this.$route.name)

  //     console.log(this.$route.name)
  //     if (this.$route.name === 'EditTeam' && this.selectedTeam.id) this.fetchTeamEmployees(this.selectedTeam.id)
  //   }
  // },
  // computed: {
  //   ...mapGetters(['allTeamEmployees', 'allEmployees', 'selectedTeam']),
  //   employees () {
  //   console.log(this.$route.name)

  //     if (this.$route.name === 'EditTeam') return this.allTeamEmployees
  //     else return this.allEmployees
  //   }
  // },
  // methods: {
  //   ...mapActions(['fetchTeamEmployees', 'fetchEmployees']),
  //   ...mapMutations(['setTeamEmployees']),
  //   setListHeight () {
  //     if (this.$route.name === 'EditTeam') {
  //       if (!this.listHeight) this.listHeight = '100%'
  //       else this.listHeight = 0
  //     } else this.listHeight = '100%'
  //   }
  // },
  // beforeDestroy() {
  //   this.setTeamEmployees([])
  // }
}
</script>

<style scoped lang="scss">
.employee-list {
  &-container {
    position: relative;
    margin-bottom: 30px;
    .dropdown-button {
      position: absolute;
      top: 0;
      right: 0;
      svg {
        &.rotate-180 {
          transform: rotate(-180deg);
        }
      }
    }
    &-title {
      font-weight: bold;
      span {
        color: red;
      }
    }
  }
  ul {
    overflow: hidden;
  }
}
</style>