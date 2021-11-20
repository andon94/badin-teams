<template>
  <div class="home">
    <div class="title">
      <span class="before">Dobrodosli u</span>
      BADINSOFT
      <span class="after">Timove</span>
    </div>
    <div class="content">
      <p>
        <span class="small-text">Aplikacija za prikaz</span>
        <span>
          <router-link :to="{ name: 'Teams' }">Timova</router-link>
          i njihovih clanova.
        </span>
        <span class="right-text">
          Informacije o
          <router-link :to="{ name: 'Clients' }">Klijentima</router-link>.
        </span>
        <span>
          <router-link :to="{ name: 'Projects' }">Projekta</router-link>
          na kojima rade.
        </span>
      </p>
    </div>
    <div class="social">
      <div>
        <a href="https://www.facebook.com/badinsoft/"
           target="_blank">
          <svg-icon type="mdi" :path="path.fb"></svg-icon>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/company/badin-soft/mycompany/"
           target="_blank">
          <svg-icon type="mdi" :path="path.li"></svg-icon>
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/badin.soft/?hl=en"
           target="_blank">
          <svg-icon type="mdi" :path="path.ig"></svg-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiFacebook, mdiInstagram, mdiLinkedin } from '@mdi/js'

export default {
  name: "Home",
  components: {
    SvgIcon,
  },
  data () {
    return {
      path: {
        fb: mdiFacebook,
        ig: mdiInstagram,
        li: mdiLinkedin
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  position: relative;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 150px 20px 50px;

  & > div {
    margin: 30px 0;
  }

  .logo {
    position: absolute;
    top: -22px;
    left: -60px;
    margin: 0;
    overflow: hidden;
    max-height: 100px;
    transform: scale(0.5);
  }

  .title {
    position: relative;
    color: $light;
    font-size: 50px;
    letter-spacing: 6px;
    font-weight: 900;

    .before, .after {
      position: absolute;
      top: -20px;
      left: 3px;
      color: $badin-color;
      font-size: 18px;
    }

    .after {
      top: unset;
      left: unset;
      bottom: -20px;
      right: 3px;
    }
  }
  .content {
    margin-top: 0;
    color: $light;
    width: 100%;
    font-size: 20px;
    font-weight: 300;

    span {
      display: inline-flex;
      align-items: center;
      line-height: 1.2;
      background-color: #ffffff26;
      border-radius: 5px; 
      clear: both;
      font-size: 18px;
      
        &:not(.small-text) {
          padding: 10px;
        }

        &:not(.right-text) {
          a {
            margin-right: 5px;
          }
        }

      &.small-text {
        font-size: 10px;
        letter-spacing: 4px;
        background-color: transparent;
      }

      &.right-text {
        margin: 30px 0;
        float: right;

        a {
          margin-left: 5px;
        }
      }
    }

    a {
      color: $badin-color;
      text-decoration: none;
      font-size: 25px;
      text-transform: capitalize;
      letter-spacing: 1.5px;
      font-weight: 800;
    }
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      padding: 0 20px;
      transform: scale(1.5);
      a {
        color: $light;
      }
    }
  }
}
</style>
