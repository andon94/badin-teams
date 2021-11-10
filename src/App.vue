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
  // display: flex;
  // flex-direction: column;
  min-height: 100vh;
  // background-color: $background;
background: rgb(39,41,50);
background: linear-gradient(183deg, rgba(39,41,50,1) 46%, rgba(79,134,198,1) 100%);

//   animation-name: example;
//   animation-duration: 1s;
//   animation-iteration-count: infinite;
// animation-timing-function: linear;

// @keyframes example {
//   0% {background: linear-gradient(183deg, rgba(39,41,50,1) 46%, rgba(79,134,198,1) 100%);}
//   25% {background: linear-gradient(183deg, rgba(39,41,50,1) 65%, rgba(79,134,198,1) 100%);}
//   50% {background: linear-gradient(183deg, rgba(39,41,50,1) 16%, rgba(79,134,198,1) 100%);}
//   75% {background: linear-gradient(183deg, rgba(39,41,50,1) 65%, rgba(79,134,198,1) 100%);}
//   100% {background: linear-gradient(183deg, rgba(39,41,50,1) 46%, rgba(79,134,198,1) 100%);}

// }
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
  text-transform: uppercase;
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
