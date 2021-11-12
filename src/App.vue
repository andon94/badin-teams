<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation  v-if="!navigationDisabled" />
      <router-view />
    </div>
    <Footer v-if="!navigationDisabled" />
  </div>
</template>

<script>
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';

export default {
  name: "app",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      navigationDisabled: null,
    };
  },
  mounted() {
    this.checkRoute();
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
