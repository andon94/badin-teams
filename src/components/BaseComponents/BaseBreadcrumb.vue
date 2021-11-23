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
  top: calc(100vh - 36px);
  background: $dark;
  padding: 10px 0 10px 10px;
  z-index: 10;

  @media (min-width: 1210px) {
    justify-content: flex-start;
    margin-left: -10px;
  }


  .crumb {
    font-weight: bold;
    font-size: 13px;
    text-decoration: none;
    background: $white;
    padding: 5px 10px;
    cursor: pointer;

    &:first-of-type {
      border-top-left-radius: 5px;

      @media (min-width: 1210px) {
        border-top-left-radius: 0;
      }
    }

    &:last-of-type {
      border-top-right-radius: 5px;
    }

    a {
      color: $dark;
      font-weight: bold;
      font-size: 13px;
      text-decoration: none;
    }

    &:last-of-type {
      color: $badin-color;
    }
  }
}
</style>