<template>
  <div class="app-wrapper">
    <div class="logo">
      <router-link to="/">
        <img src="./assets/images/logo/logo-white.png" alt="">
      </router-link>
    </div>
    <div class="app">
      <BaseBreadcrumb />
      <Navigation  v-if="!navigationDisabled" />
      <router-view />
    </div>
    <BaseError />
    <Footer v-if="!navigationDisabled" />
  </div>
</template>

<script>
import Storage from './services/storage/index'
import { baseFetcher } from './services/api/api'
import { isAuthenticated } from './utils/auth'
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import BaseBreadcrumb from './components/BaseComponents/BaseBreadcrumb';
import BaseError from './components/BaseComponents/BaseError.vue'


export default {
  name: "app",
  components: {
    BaseBreadcrumb,
    Navigation,
    Footer,
    BaseError
  },
  data() {
    return {
      navigationDisabled: null,
      interceptor: null,
    }
  },
  mounted() {
    this.checkRoute();
    this.interceptor = baseFetcher.fetcher.interceptors.request.use(
      (config) => {
        if (this.$route.name !== 'Login') {
          const storage = Storage.getItem('storage')
          if (storage && !isAuthenticated(storage)) {
            Storage.removeItem('storage')
            this.$store.commit('setLoginStatus', false)
            this.$router.push({path:'/login'})
            baseFetcher.setOptions({'Authorization': null})
          }
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  },
  destroyed() {
    baseFetcher.fetcher.interceptors.request.eject(this.interceptor);
  },
  methods: {
    checkRoute() {
      if (this.$route.name === "Login" || this.$route.name === "ForgotPass") {
        this.navigationDisabled = true;
        return;
      }
      this.navigationDisabled = false;
    }
  },
  watch: {
    $route() {
      this.checkRoute();
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 5px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba($dark, 0.9);
  }
  &::-webkit-scrollbar-thumb {
    background: $light;
  }
}

.app-wrapper {
  position: relative;
  .logo {
    position: fixed;
    top: -22px;
    left: -60px;
    margin: 0;
    overflow: hidden;
    max-height: 100px;
    transform: scale(0.5);
    z-index: 99;

    @media (min-width: 768px) {
      z-index: 101;
    }
  }
}

.app {
  min-height: 100vh;
  background: rgb(39,41,50);
  background: linear-gradient(180deg, rgba(39,41,50,1) 15%, rgba(43,85,139,1) 50%, rgba(39,41,50,1) 85%);
}

.home {
  min-height: 90vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  // text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}
</style>
