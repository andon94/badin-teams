<template>
  <header>
    <MenuIcon @click="toggleNav"
              class="menu-icon"
              v-show="!mobileNav"/>
    <transition name="mobile-nav">
      <ul class="mobile-nav"
          v-if="mobileNav"
          @click="toggleNav">
          <div class="close-icon">
              <svg-icon type="mdi" :path="path.close"></svg-icon>
          </div>
          <router-link class="link"
                       :to="{ name: 'Home' }">
            Home
          </router-link>
          <router-link class="link"
                       :to="{ name: 'Teams' }">
            Teams
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'CreateTeam' }"
                       v-if="loginStatus">
            Create Team
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'EditTeams' }"
                       v-if="loginStatus">
            Edit Teams
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'AddEmployee' }"
                       v-if="loginStatus">
            Add Employee
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'EditEmployees' }"
                       v-if="loginStatus">
            Edit Employees
          </router-link>
          <router-link class="link"
                       :to="{ name: 'Clients' }">
            Clients
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'CreateClient' }"
                       v-if="loginStatus">
            Add Client
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'EditClients' }"
                       v-if="loginStatus">
            Edit Clients
          </router-link>
          <router-link class="link"
                       :to="{ name: 'Projects' }">
            Projects
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'CreateProject' }"
                       v-if="loginStatus">
            Create Project
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'EditProjects' }"
                       v-if="loginStatus">
            Edit Projects
          </router-link>
          <router-link class="link"
                       :to="{ name: 'Login' }"
                       v-if="!loginStatus">
            Login
          </router-link>
          <li class="link logout"
              :to="{ name: 'Home' }"
              @click="logout"
              v-if="loginStatus">
            Logout
          </li>
      </ul>
    </transition>
  </header>
</template>

<script>
import { baseFetcher } from '../../services/api/api'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'
import { mapGetters } from 'vuex'
import Storage from '../../services/storage'
import MenuIcon from '../../assets/images/Icons/bars-regular.svg';

export default {
  name: 'Navigation',
  components: {
    SvgIcon,
    MenuIcon
  },
  data () {
    return {
      mobileNav: null,
      path: {
        close: mdiClose,
      }
    }
  },
  computed: {
    ...mapGetters(['loginStatus'])
  },
  methods: {
    toggleNav() {
      this.mobileNav = !this.mobileNav;
    },
    logout () {
      Storage.removeItem('storage')
      this.$store.commit('setLoginStatus', false)
      this.$router.push({path:'/login'})
      baseFetcher.setOptions({'Authorization': null})
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 100;
  position: relative;

  .link {
    font-weight: 500;
    padding: 0 10px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  .menu-icon, .close-icon {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    height: 25px;
    width: auto;
    color: $light;
  }

  .close-icon {
    transform: scale(1.4);
  }

  .mobile-nav {
    padding: 20px;
    width: 100%;
    height: 100%;
    // width: 70%;
    // max-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: $dark;
    top: 0;
    left: 0;
    z-index: 100;

    .link {
      padding: 15px 0;
      color: $light;
      list-style-type: none;

      &.admin {
        // padding-left: 10px;
        font-size: 15px;
        color: gray;
      }

      &.logout {
        color: $error;
      }
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.5s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-100%);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-100%);
  }
}

</style>