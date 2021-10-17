<template>
  <div class="reset-pass">
      <Modal v-if="modalActive" v-on:close-modal="closeModal" />
      <Loading v-if="loading" />
      <div class="form-wrap">
        <form class="reset">
          <h2>Reset Password</h2>
          <p>Forgot your password? Enter your email to reset it</p>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="Email" v-model="email">
                  <email class="icon" />
              </div>
          </div>
          <button>Reset</button>
          <div class="angle"></div>
      </form>
      <div class="background"></div>
      </div>
  </div>
</template>

<script>
import email from "../assets/images/Icons/envelope-regular.svg";
import Modal from "../components/BaseComponents/Modal";
import Loading from "../components/BaseComponents/Loading";
export default {
name: "ForgtoPass",
    data() {
        return {
            email: null,
            modalActive: null,
            modalMessage: '',
            loading: null,
        }
    },
    components: {
        email,
        Modal,
        Loading
    },
    methods: {
        closeModal() {
            this.modalActive = !this.modalActive;
            this.email = '';
        },
    },
};
</script>

<style lang="scss" scoped>
    .reset-pass {
        position: relative;
        .form-wrap .reset {
            h2 {
                margin-bottom: 10px;
            }

            p {
                margin-bottom: 30px;
                text-align: center;
            }
        }
    }
</style>