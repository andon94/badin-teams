<template>
  <div class="form-wrap">
    <form @submit.prevent
          class="login">
      <h2>Login to Badin Teams</h2>
      <BaseInput :placeholder="'Email'"
                 v-model="email"/>

      <BaseInput :placeholder="'Password'"
                 type="password"
                 v-model="password"/>

      <!-- <router-link class="forgot-password"
                   :to="{ name: 'ForgotPass' }">
        Forgot your password?
      </router-link> -->
      <BaseButton text="Create"
                  type="submit"
                  @click="handleLogin"/>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import { authAPI } from '../services/login.js'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'

// import email from "../assets/images/Icons/envelope-regular.svg";
// import password from "../assets/images/Icons/lock-alt-solid.svg";

export default {
  name: "Login",
  components: {
    BaseInput,
    BaseButton
    // email,
    // password
  },
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    handleLogin () {
      const data = {
        username: this.email,
        password: this.password
      }

      authAPI.login(data)
        .then(res => {
          localStorage.setItem('badinTeamsStorage', JSON.stringify(res))
          this.$router.push({path:'/'})
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin-bottom: 30px;

    .router-link {
      color: #000;
    }
  }

form {
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media (min-width: 900px) {
    padding: 0 50px;
  }

  h2 {
    text-align: center;
    font-size: 32px;
    color: #303030;
    margin-bottom: 40px;
    @media (min-width: 900px) {
      font-size: 40px;
    }
  }

  .angle {
    display: none;
    position: absolute;
    background-color: #fff;
    transform: rotateZ(3deg);
    width: 60px;
    right: -30px;
    height: 101%;
    @media(min-width: 900px) {
      display: initial;
    }
  }
}

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/images/background.png");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
        display: initial;
    }
  }
}
</style>