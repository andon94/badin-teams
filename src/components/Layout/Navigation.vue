<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">{{navHeader}}</router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">
            Home
          </router-link>
          <router-link class="link" :to="{ name: 'Teams' }">
            Teams
          </router-link>
          <router-link class="link" :to="{ name: 'CreateTeam' }"
                       v-if="show">
            Create Team
          </router-link>
          <router-link class="link" :to="{ name: 'EditTeams' }"
                       v-if="show">
            Edit Teams
          </router-link>
          <router-link class="link" :to="{ name: 'AddEmployee' }"
                       v-if="show">
            Add Employee
          </router-link>
          <router-link class="link" :to="{ name: 'EditEmployees' }"
                       v-if="show">
            Edit Employees
          </router-link>
          <router-link class="link" :to="{ name: 'Clients' }">
            Clients
          </router-link>
          <router-link class="link" :to="{ name: 'CreateClient' }"
                       v-if="show">
            Add Client
          </router-link>
          <router-link class="link" :to="{ name: 'EditClients' }"
                       v-if="show">
            Edit Clients
          </router-link>
          <router-link class="link" :to="{ name: 'Projects' }">
            Projects
          </router-link>
          <router-link class="link" :to="{ name: 'CreateProject' }"
                       v-if="show">
            Create Project
          </router-link>
          <router-link class="link" :to="{ name: 'EditProjects' }"
                       v-if="show">
            EditProjects
          </router-link>
          <router-link class="link" :to="{ name: 'Login' }"
                       v-if="!show">
            Login
          </router-link>
          <li class="link" :to="{ name: 'Home' }"
                       @click="logout"
                       v-if="show">
            Logout
          </li>
        </ul>
      </div>
    </nav>
    <MenuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav" @click="toggleMobileNav">
          <router-link class="link" :to="{ name: 'Home' }">
            Home
          </router-link>
          <router-link class="link" :to="{ name: 'Teams' }">
            Teams
          </router-link>
          <router-link class="link admin" :to="{ name: 'CreateTeam' }"
                       v-if="show">
            Create Team
          </router-link>
          <router-link class="link admin" :to="{ name: 'EditTeams' }"
                       v-if="show">
            Edit Teams
          </router-link>
          <router-link class="link admin" :to="{ name: 'AddEmployee' }"
                       v-if="show">
            Add Employee
          </router-link>
          <router-link class="link admin" :to="{ name: 'EditEmployees' }"
                       v-if="show">
            Edit Employees
          </router-link>
          <router-link class="link" :to="{ name: 'Clients' }">
            Clients
          </router-link>
          <router-link class="link admin" :to="{ name: 'CreateClient' }"
                       v-if="show">
            Add Client
          </router-link>
          <router-link class="link admin" :to="{ name: 'EditClients' }"
                       v-if="show">
            Edit Clients
          </router-link>
          <router-link class="link" :to="{ name: 'Projects' }">
            Projects
          </router-link>
          <router-link class="link admin" :to="{ name: 'CreateProject' }"
                       v-if="show">
            Create Project
          </router-link>
          <router-link class="link admin" :to="{ name: 'EditProjects' }"
                       v-if="show">
            EditProjects
          </router-link>
          <router-link class="link" :to="{ name: 'Login' }"
                       v-if="!show">
            Login
          </router-link>
          <li class="link logout" :to="{ name: 'Home' }"
                       @click="logout"
                       v-if="show">
            Logout
          </li>
      </ul>
    </transition>
  </header>
</template>

<script>
import { isLoggedIn } from '../../router/index.js'
import MenuIcon from '../../assets/images/Icons/bars-regular.svg';

export default {
  name: 'Navigation',
  components: {
    MenuIcon
  },
  data () {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      show: false
    }
  },
  created () {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted () {
    this.show = isLoggedIn()
  },
  computed: {
    navHeader () {
      let routeName = this.$route.name
      if (routeName) routeName = routeName.replace( /([a-z])([A-Z])/g, "$1 $2");
      return routeName || ''
    }
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    logout () {
      // privremeno
      window.localStorage.removeItem('badinTeamsStorage')
      if (this.$route.path !== '/') this.$router.push({path:'/'})
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 10px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    display: flex;
    padding: 15px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin: 30px;

        .link {
          margin-right: 30px;
        }

        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 10px;
    height: 20px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    height: 100%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
      list-style-type: none;

      &.admin {
        padding-left: 10px;
        font-size: 15px;
        color: gray;
      }

      &.logout {
        color: darkred;
      }
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.5s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}

</style>