<template>
  <div class="home">
    <div class="hero-background"></div>
    <div class="main-title">
      <span class="before">Welcome to</span>
      <span class="highlight">BADINSOFT</span>
      <span class="after">Teams</span>
    </div>
    <div class="content">
      <div class="content-wrapp">
        <div class="content-item">
          
          <p class="title">It's all about 
            <router-link :to="{ name: 'Teams' }">Teams</router-link> and relationships.
          </p>
        </div>
        <div class="content-item">
          <p class="title">
          Here we share info about 
            <router-link :to="{ name: 'Clients' }">Clients</router-link>
            and our relationships to them.
          </p>
        </div>
        <div class="content-item">
          <p class="title">
          Each of ours 
          <router-link :to="{ name: 'Projects' }">Projects</router-link>
          is important.
          </p>

        </div>
        <div class="content-item-text">
          <p class="text">
          "You should never forget where you were, where you started, and where you are now, to know where you will go next. When you have these two things in mind, and keep them in balance, you have all the precondition for a very quality and beautiful life."
          </p>
        </div>
      </div>
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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 120px 20px 20px;

  .hero-background {
    width: 100%;
    height: 225px;
    background: url("../assets/images/blogPhotos/mapa360.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
  }

  .logo {
    position: fixed;
    top: -22px;
    left: -60px;
    margin: 0;
    overflow: hidden;
    max-height: 100px;
    transform: scale(0.5);
  }

    .main-title {
      position: relative;
      color: $white;
      font-size: 50px;
    letter-spacing: 6px;
    font-weight: 900;
    margin-bottom: 100px;

      .highlight {
        text-shadow: -5px -4px 35px #ffffff;
    }

    .before {
      color: $white;
      font-weight: 100;
    }

    .before, .after {
      position: absolute;
      top: -10px;
      left: 3px;
      font-size: 18px;
      text-shadow: -5px -4px 35px #ffffff;
    }

    .after {
      top: unset;
      left: unset;
      bottom: -10px;
      right: 3px;
      color: $white;
    }
  }

  .content {
    margin: 0 0 80px;
    color: $light;
    width: 100%;
    font-size: 20px;
    font-weight: 300;

    .content-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .content-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 2px solid $badin-color-secondary;

      &:nth-child(3) {
        border-bottom: none;
      }

      .title {
        position: relative;
       width: 100%;
       font-size: 20px;
       letter-spacing: 2px;
      }

      .title a {
        position: relative;
        display: inline-block;
        color: white;
        letter-spacing: 0;
        background-color: $badin-color-secondary;
        padding: 3px 5px;
        border-radius: 5px;
        margin: 2px 0;
      }

      .text {
        font-size: 16px;
        color: $light;
        font-weight: 300;
        font-style: oblique;
        letter-spacing: 1.6px;
        text-align: center;
      }
    }

    .content-item-text {
      margin: 30px 0;
      background: url("../assets/images/blogPhotos/neformalna360.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 10px;
      padding: 20px;

      .text {
        font-size: 16px;
        padding: 10px;
        backdrop-filter: blur(2px);
        background-color: #d099647a;
        color: aliceblue;
        font-weight: 500;
        text-align: center;
        border-radius: 10px;
      }
    }

    a {
      color: $badin-color;
      text-decoration: none;
      font-size: 20px;
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
