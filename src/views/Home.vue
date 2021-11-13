<template>
  <div class="home">
    <div class="title">
      <span class="before">Dobrodosli u</span>
      BADINSOFT
      <span class="after">Timove</span>
    </div>
    <div class="content">
      <p>
        <span>
          Ovo je nasa aplikacija <br> za prikaz
          <router-link :to="{ name: 'Teams' }">timova</router-link>
          i njihovih clanova.
        </span>
        <span>
          Kao i informacije o
          <router-link :to="{ name: 'Clients' }">klijentima</router-link>
          i
          <router-link :to="{ name: 'Projects' }">projektima</router-link>
          na kojima timovi rade.
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
    letter-spacing: 4px;

    .before, .after {
      position: absolute;
      top: -20px;
      left: 0;
      color: $badin-color;
      font-size: 18px;
    }

    .after {
      top: unset;
      left: unset;
      bottom: -20px;
      right: 0;
    }
  }
  .content {
    margin-top: 0;
    color: $light;
    text-align: left;
    font-size: 20px;
    font-weight: 300;

    span {
      display: block;
      line-height: 1.2;

      &:last-child {
        margin: 30px 0 0;
        text-align: right;
      }
    }

    a {
      color: $badin-color;
      text-decoration: none;
      font-size: 25px;
      text-transform: capitalize;
      padding: 20px 0;
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
