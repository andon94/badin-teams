<template>
  <div class="home">
    <div class="main-title">
      <span class="before">Welcome to</span>
      <span class="highlight">BADINSOFT</span>
      <span class="after">Teams</span>
    </div>
    <div class="content">
      <div class="content-wrapp">
        <div class="content-item">
          <img src="../assets/images/Icons/teams.png" alt="">
          <p class="title">
            <router-link :to="{ name: 'Teams' }">Teams</router-link>
            <img class="finger-icon" src="../assets/images/Icons/fingerprint.png" alt="">
          </p>
          <p class="text">It's all about people and relationships.</p>
        </div>
        <div class="content-item">
          <img src="../assets/images/Icons/client.png" alt="">
          <p class="title">
            <router-link :to="{ name: 'Clients' }">Clients</router-link>
            <img class="finger-icon"  src="../assets/images/Icons/fingerprint.png" alt="">
          </p>
          <p class="text">Here we share info about them.</p>
        </div>
        <div class="content-item">
          <img src="../assets/images/Icons/project.png" alt="">
          <p class="title">
          <router-link :to="{ name: 'Projects' }">Projects</router-link>
          <img class="finger-icon"  src="../assets/images/Icons/fingerprint.png" alt="">
          </p>
          <p class="text">Each of ours is important.</p>
        </div>
        <div class="content-item">
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

  .logo {
    position: absolute;
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
      margin-bottom: 80px;

      .highlight {
      background: linear-gradient(to right, #fff 30%, #4587e1 70%, #fff 90%);
      background-position: 0;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    //   animation: shine 2.5s infinite linear;
    //   animation-fill-mode: forwards;
      
    //   @keyframes shine {
    //     0% {background-position:0;}
    //     60% {background-position:360px;}
    //     100% {background-position:330px;}
    //   }
    }

    .before {
      color: $white;
      font-weight: 100;
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
      

      &:not(:last-of-type) {
        margin-bottom: 40px;  
      }

      img {
        width: 100px;
        margin-bottom: 20px;
      }

      .title {
        position: relative;
      }

      .title a {
        font-size: 32px;
        letter-spacing: 5px;
        font-weight: 900;
        position: relative;
        color: $white;
        display: block;
        margin-bottom: 10px;
        line-height: 1;
        text-decoration: underline;

          // &:after {
          //   content: "";
          //   background-color: $badin-color;
          //   width: 15px;
          //   height: 15px;
          //   position: absolute;
          //   top: 0;
          //   right: -14px;
          //   border-radius: 50%;
          // }

        
      }

      .finger-icon {
        width: 20px;
        position: absolute;
        top: 0;
        right: -20px;
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

    // span {
    //   display: inline-flex;
    //   align-items: center;
    //   line-height: 1.2;
    //   background-color: #ffffff26;
    //   border-radius: 5px; 
    //   clear: both;
    //   font-size: 18px;
    //   position: relative;
      
    //     &:not(.small-text) {
    //       padding: 10px;
    //       box-shadow: 0px 0px 20px #4587e187;
    //     }

    //     &:not(.right-text) {
    //       a {
    //         margin-right: 5px;
    //       }
    //     }

    //   &.small-text {
    //     font-size: 10px;
    //     letter-spacing: 4px;
    //     background-color: transparent;
    //     position: absolute;
    //     top: -14px;
    //     left: 0;

    //     &.right-text {
    //       margin: 0;
    //     }
    //   }

    //   &.right-text {
    //     margin: 30px 0;
    //     float: right;

    //       .small-text {
    //         left: unset;
    //         right: 0;
    //       }

    //     a {
    //       margin-left: 5px;
    //     }
    //   }
    // }

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
