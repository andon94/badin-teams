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
            <img src="../../assets/images/Icons/home.png" alt="">
            Home
          </router-link>
          <router-link class="link"
                       :to="{ name: 'Teams' }">
            <img src="../../assets/images/Icons/teams.png" alt="">
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
            <img src="../../assets/images/Icons/client.png" alt="">
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
            <img src="../../assets/images/Icons/project.png" alt="">
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
            <img src="../../assets/images/Icons/login.png" alt="">
            Login
          </router-link>
          <li class="link logout"
              :to="{ name: 'Home' }"
              @click="logout"
              v-if="loginStatus">
              <img src="../../assets/images/Icons/logout.png" alt="">
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
  background-color: transparent;
  padding: 0 20px;
  height: 70px;
  z-index: 100;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(2px);

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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: $dark;
    top: 0;
    left: 0;
    z-index: 100;

    .link {
      padding: 15px 0;
      color: $light;
      list-style-type: none;
      font-size: 50px;
      font-weight: 900;
      display: flex;
      align-items: center;

      &.admin {
        font-size: 15px;
        color: gray;
      }

      &.logout {
        color: $error;
      }

      img {
        width: 33px;
        display: flex;
        margin-right: 10px;
        outline: 4px solid white;
        border-radius: 50%;
      }
    }

    .router-link-active {
      color: $badin-color;

      img {
        outline-color: $badin-color;
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