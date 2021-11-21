<template>
  <div class="home">
    <div class="title">
      <span class="before">Welcome to</span>
      <span class="highlight">BADINSOFT</span>
      <span class="after">Teams</span>
    </div>
    <div class="content">
      <p>
        <span>
          <span class="small-text">It's all about people</span>
          <router-link :to="{ name: 'Teams' }">Teams</router-link>
          and relationships.
        </span>
        <span class="right-text">
          <span class="small-text">Here we share</span>
          Informations about
          <router-link :to="{ name: 'Clients' }">Clients</router-link>.
        </span>
        <span>
          <span class="small-text">Each of our</span>
          <router-link :to="{ name: 'Projects' }">Projects</router-link>
          is important.
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
  padding: 120px 20px 30px;

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
      // color: $light;
      font-size: 50px;
      letter-spacing: 6px;
      font-weight: 900;
      .highlight {
      background: linear-gradient(to right, #fff 0, #4587e1 30%, #fff 50%);
      background-position: 0;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shine 2.5s infinite linear;
      animation-fill-mode: forwards;
      
      @keyframes shine {
        0% {background-position:0;}
        // 60% {background-position:360px;}
        100% {background-position:330px;}
      }
    }

    .before {
      color: $white;
    }

    .before, .after {
      // color: $badin-color;
      position: absolute;
      top: -20px;
      left: 3px;
      font-size: 18px;
    }

    .after {
      top: unset;
      left: unset;
      bottom: -20px;
      right: 3px;
      color: $badin-color;
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
      position: relative;
      
        &:not(.small-text) {
          padding: 10px;
          box-shadow: 0px 0px 20px #4587e187;
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
        position: absolute;
        top: -14px;
        left: 0;

        &.right-text {
          margin: 0;
        }
      }

      &.right-text {
        margin: 30px 0;
        float: right;

          .small-text {
            left: unset;
            right: 0;
          }

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
