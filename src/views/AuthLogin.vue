<template>
  <div class="form-wrap">
    <BaseError />
    <ValidationObserver ref="loginForm"
                    v-slot="{ invalid }">
      <form @submit.prevent
            class="login">
        <p>Login</p>
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
import { baseFetcher } from '../services/api/api'
import { authAPI } from '../services/api/login.js'
import Storage from '../services/storage'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'
import { mapActions, mapMutations } from "vuex";
import { setUserRoles } from "../utils/auth";
import BaseError from '../components/BaseComponents/BaseError.vue'


export default {
  name: "Login",
  components: {
    BaseInput,
    BaseButton,
    BaseError
  },
  data() {
    return {
      email: null,
      password: null,
      error: null
    }
  },
  methods: {
    ...mapActions(['setPermissions']),
    ...mapMutations(['setPermissions', 'setLoginStatus', 'setError']),
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
          this.setPermissions(setUserRoles(res.roles))
          this.setLoginStatus(true)
          Storage.setItem('storage', res)
          this.$router.push({path:'/'})
          baseFetcher.setOptions({'Authorization': res.token})
        })
        .catch(err => {
          this.setError(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/auth.scss';
</style>
