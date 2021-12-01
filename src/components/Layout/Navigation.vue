<template>
  <header>
    <MenuIcon class="menu-icon"
              @click="toggleNav" />

      <ul class="mobile-nav"
          :class="{'visible': visible}"
          @click="closeNav"
          @mouseover="openNav"
          @mouseleave="closeNav">
          <div class="close-icon"
               v-if="visible">
              <svg-icon type="mdi" :path="path.close"></svg-icon>
          </div>
          <router-link class="link"
                       :to="{ name: 'Home' }">
            <span class="icon">
              <svg-icon type="mdi" :path="path.home"></svg-icon>
            </span>
            <span v-if="visible">
              Home
            </span>
          </router-link>
          <router-link class="link"
                       :to="{ name: 'Teams' }">
            <span class="icon">
              <svg-icon type="mdi" :path="path.teams"></svg-icon>
            </span>
            <span v-if="visible">
              Teams
            </span>
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'CreateTeam' }"
                       v-if="loginStatus">
            <span class="icon secondary">
              <svg-icon type="mdi" :path="path.plus"></svg-icon>
            </span>
            <span v-if="visible">
              Create Team
            </span>
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'EditTeams' }"
                       v-if="loginStatus">
            <span class="icon secondary">
              <svg-icon type="mdi" :path="path.edit"></svg-icon>
            </span>
            <span v-if="visible">
              Edit Team
            </span>
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'AddEmployee' }"
                       v-if="loginStatus">
            <span class="icon secondary">
              <svg-icon type="mdi" :path="path.plus"></svg-icon>
            </span>
            <span v-if="visible">
              Add Employee
            </span>
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'EditEmployees' }"
                       v-if="loginStatus">
            <span class="icon secondary">
              <svg-icon type="mdi" :path="path.edit"></svg-icon>
            </span>
            <span v-if="visible">
              Edit Employee
            </span>
          </router-link>
          <router-link class="link"
                       :to="{ name: 'Clients' }">
            <span class="icon">
              <svg-icon type="mdi" :path="path.clients"></svg-icon>
            </span>
            <span v-if="visible">
              Clients
            </span>
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'CreateClient' }"
                       v-if="loginStatus">
            <span class="icon secondary">
              <svg-icon type="mdi" :path="path.plus"></svg-icon>
            </span>
            <span v-if="visible">
              Add Client
            </span>
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'EditClient' }"
                       v-if="loginStatus">
            <span class="icon secondary">
              <svg-icon type="mdi" :path="path.edit"></svg-icon>
            </span>
            <span v-if="visible">
              Edit Client
            </span>
          </router-link>
          <router-link class="link"
                       :to="{ name: 'Projects' }">
            <span class="icon">
              <svg-icon type="mdi" :path="path.projects"></svg-icon>
            </span>
            <span v-if="visible">
              Projects
            </span>
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'CreateProject' }"
                       v-if="loginStatus">
            <span class="icon secondary">
              <svg-icon type="mdi" :path="path.plus"></svg-icon>
            </span>
            <span v-if="visible">
              Add Project
            </span>
          </router-link>
          <router-link class="link admin"
                       :to="{ name: 'EditProjects' }"
                       v-if="loginStatus">
            <span class="icon secondary">
              <svg-icon type="mdi" :path="path.edit"></svg-icon>
            </span>
            <span v-if="visible">
              Edit Project
            </span>
          </router-link>
          <router-link class="link"
                       :to="{ name: 'Login' }"
                       v-if="!loginStatus && visible">
            <span class="icon">
              <svg-icon type="mdi" :path="path.login"></svg-icon>
            </span>
            <span v-if="visible">
              Login
            </span>
          </router-link>
          <li class="link logout"
              :to="{ name: 'Home' }"
              @click="logout"
              v-if="loginStatus && visible">
            <span class="icon">
              <svg-icon type="mdi" :path="path.logout"></svg-icon>
            </span>
            <span v-if="visible">
              Logout
            </span>
          </li>
      </ul>
    <!-- </transition> -->
  </header>
</template>

<script>
import { baseFetcher } from '../../services/api/api'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiArrowLeft, mdiHome, mdiAccountGroup, mdiHandshake, mdiLightbulbOn, mdiAccount, mdiPlus, mdiPencil, mdiLogout, mdiLogin } from '@mdi/js'
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
      visible: null,
      path: {
        close: mdiArrowLeft,
        home: mdiHome,
        teams: mdiAccountGroup,
        clients: mdiHandshake,
        projects: mdiLightbulbOn,
        employee: mdiAccount,
        plus: mdiPlus,
        edit: mdiPencil,
        logout: mdiLogout,
        login: mdiLogin
      }
    }
  },
  computed: {
    ...mapGetters(['loginStatus'])
  },
  methods: {
    toggleNav () {
      this.visible = !this.visible;
    },
    closeNav () {
      this.visible = false
    },
    openNav () {
      this.visible = true
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

  @media (min-width: 768px) {
    width: fit-content;
  }

  .link {
    font-weight: 500;
    padding: 0 10px;
    transition: 0.3s color ease;
    padding: 10px !important;

    @media (min-width: 768px) {
      &:hover {
        color: $badin-color !important;
        backdrop-filter: blur(10px);
        background-color: rgba($light, 0.2);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        border-radius: 5px;
      }
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

    @media (min-width: 768px) {
      display: none;
    }
  }

  .close-icon {
    transform: scale(1.4);
  }

  .mobile-nav {
    width: 0px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: $dark;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    overflow-x: hidden;
    transition: all 0.2s ease-in;
    padding-top: 80px;

    @media (min-width: 768px) {
      width: fit-content;
    }

    &.visible {
      width: 100%;
      @media (min-width: 768px) {
        width: 250px;
      }
    }

    .router-link-exact-active {
      color: $badin-color;
    }

    .link {
      padding: 15px 0;
      color: $light;
      list-style-type: none;
      font-size: 24px;
      font-weight: 900;
      display: flex;
      align-items: center;
      display: flex;
      flex-direction: column;
      width: fit-content;
      margin: 0 20px;
      white-space: nowrap;
      display: flex;
      flex-direction: row;
      width: calc(100% - 40px);

      span {
        &.icon {
          display: flex;
          align-items: center;
          margin-right: 10px;

          &.secondary {
            svg {
              transform: scale(0.8);
            }
          }
        }
      }

      &.admin {
        font-size: 14px;
        color: gray;

        &::after {
          display: none;
        }

        &.router-link-exact-active {
          color: $badin-color;
        }
      }

      &.logout {
        color: $error !important;
        margin-bottom: 40px;
        flex-grow: 1;
        align-items: flex-end;
        &::after {
          display: none;
        }
        &:hover {
          background: none;
          box-shadow: none;
          cursor: default;

          span {
            cursor: pointer;
          }
        }
      }
    }

    .router-link-exact-active {
      color: $badin-color;
    }
  }
}

</style>