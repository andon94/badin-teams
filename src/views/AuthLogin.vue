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
                    :to="{ name: 'ForgotPassword' }">
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

<style scoped lang="scss">
@import '@/assets/css/auth.scss';
</style>
