<template>
  <div class="form-wrap">
    <ValidationObserver ref="loginForm"
                    v-slot="{ invalid }">
      <form @submit.prevent
            class="login">
        <h2>Login to Badin Teams</h2>
        <BaseInput :placeholder="'Email'"
                   v-model="email"
                   rules="required"/>
                   <!-- dodati: required|email
                        trenutno je jedini korisnik admin, tako da ne moze da prodje proveru -->
        <BaseInput :placeholder="'Password'"
                   type="password"
                   v-model="password"
                   rules="required"/>

        <!-- <router-link class="forgot-password"
                    :to="{ name: 'ForgotPass' }">
          Forgot your password?
        </router-link> -->
        <BaseButton text="Create"
                    type="submit"
                    :disabled="invalid"
                    @click="handleLogin"/>
        <div class="angle"></div>
      </form>
    </ValidationObserver>
    <div class="background"></div>
  </div>
</template>

<script>
import { authAPI } from '../services/api/login.js'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'
import {mapActions} from "vuex";
import * as Roles from "../services/authorization/permissions";


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
    ...mapActions(['setPermissions']),
    handleLogin () {
      this.$refs.loginForm.validate().then(success => {
        if (!success) {
          return
        } else {
          this.login()
        }
      })
    },
    login () {
      const data = {
        username: this.email,
        password: this.password
      }

      authAPI.login(data)
        .then(res => {
          console.log(res)
          if(res.roles.includes('ROLE_ADMIN')) {
            this.$store.commit('setPermissions', Roles.ADMIN)
            this.$store.commit('setLoginStatus', true)
          }

          localStorage.setItem('badinTeamsStorage', JSON.stringify(res))
          this.$router.push({path:'/'})
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
  align-items: center;
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
