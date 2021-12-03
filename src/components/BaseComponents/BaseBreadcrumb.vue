<template>
  <div class="breadcrumb"
       v-if="crumbs.show">
      <div class="crumb">
        <router-link to='/'>
          Home
        </router-link>
      </div>
      <div class="crumb"
           @click="navigate(crumbs.first)">
        {{crumbs.first.replace(/([A-Z])/g, " $1")}}
      </div>
      <div class="crumb"
           v-if="crumbs.second"
           @click="navigate(crumbs.second)">
        {{crumbs.second.replace(/([A-Z])/g, " $1")}}
      </div>
      <div class="crumb"
           v-if="crumbs.third">
        {{crumbs.third.replace(/([A-Z])/g, " $1")}}
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Breadcrumb',
  data () {
    return {
      crumbs: {
        show: true,
        first: '',
        second: '',
        third: ''
      }
    }
  },
  mounted () {
    this.setBreadcrumbs(this.$route.name)
  },
  watch:{
    $route (to){
      this.setBreadcrumbs(to.name)
    }
  },
  computed: {
    ...mapGetters(['team'])
  },
  methods: {
    setBreadcrumbs (crumb) {
      if (this.$route.name === 'Home' ||
          this.$route.name === 'Login' ||
          this.$route.name === 'NotFound') this.crumbs.show = false
      else {
        this.crumbs.show = true

        const listRoutes = ['Team', 'Employee', 'Client', 'Project']

        this.crumbs.first = ''
        this.crumbs.second = ''
        this.crumbs.third = ''

        listRoutes.forEach(route => {
          if (`${route}s` === crumb) this.crumbs.first = `${route}s`
          else if (`Edit${route}s` === crumb) this.crumbs.first = `Edit${route}s`
          else if (`Add${route}s` === crumb) this.crumbs.first = `Add${route}s`
          else if (`Create${route}` === crumb) this.crumbs.first = `Create${route}`
          else if (`Add${route}` === crumb) this.crumbs.first = `Add${route}`
          else if (`${route}Profile` === crumb) {
            this.crumbs.first = `${route}s`
            this.crumbs.third = `${route}Profile`
          } else if (`Edit${route}` === crumb) {
            this.crumbs.first = `Edit${route}s`
            this.crumbs.second = `Edit${route}`
          }
        })

        if (crumb === 'Employees') {
          this.crumbs.first = 'Teams'
          this.crumbs.second = 'Employees'
        }

        if (crumb === 'EmployeeProfile') {
          if (Object.keys(this.team).length) {
            this.crumbs.first = 'Teams'
            this.crumbs.second = 'Employees'
            this.crumbs.third = `EmployeeProfile`
          } else {
            this.crumbs.first = 'Teams'
            this.crumbs.third = `EmployeeProfile`
          }
        }
      }
    },
    navigate (crumb) {
      if (this.$route.name !== crumb) {
        if (crumb === 'Employees') {
          if (Object.keys(this.team).length) this.$router.push({path:'/employees/:id', query:{id: this.team.id}})
        } else this.$router.push({name: crumb})
      }
    }
  }
}
</script>

<style scoped lang="scss">
.breadcrumb {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: calc(100vh - 46px);
  padding: 10px 0 10px 10px;
  z-index: 10;

  .crumb {
    font-weight: bold;
    font-size: 13px;
    text-decoration: none;
    border: 1px solid $light;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 15px;
    position: relative;
    color: $light;
    background: $dark;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      border: 1px solid $badin-color;
      color: $badin-color !important;
      a {
        color: $badin-color !important;
      }
    }

    a {
      color: $light !important;
      font-weight: bold;
      font-size: 13px;
      text-decoration: none;
    }

    &:last-of-type {
      border: 1px solid $badin-color;
      color: $light;

      &::after {
        display: none;
      }
    }

    &::after {
      content: '';
      height: 3px;
      width: 3px;
      background: $light;
      position: absolute;
      top: 50%;
      right: -10px;
      border-radius: 50%;
    }
  }
}
</style>