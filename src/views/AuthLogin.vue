<template>
  <div class="form-wrap">
    <ValidationObserver ref="loginForm"
                    v-slot="{ invalid }">
      <form @submit.prevent
            class="login">
        <p>Login to Badin Teams</p>
        <BaseInput :placeholder="'Email'"
                   v-model="email"
                   rules="required"/>
        <BaseInput :placeholder="'Password'"
                   type="password"
                   v-model="password"
                   rules="required"/>
        <BaseButton text="Create"
                    type="submit"
                    :disabled="invalid"
                    @click="handleLogin"
                    class="login-button"/>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { authAPI } from '../services/api/login.js'
import Storage from '../services/storage'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'
import {mapActions} from "vuex";
import {setUserRoles} from "../utils/auth";


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
          this.$store.commit('setPermissions', setUserRoles(res.roles))
          this.$store.commit('setLoginStatus', true)

          Storage.setItem('storage', res)
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
