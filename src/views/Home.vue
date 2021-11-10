<template>
  <div class="home">
    <div class="title">BADINSOFT</div>
    <div class="container">
      <div class="drops">
        <div class="drop-container container-1">
          <router-link :to="{ name: 'Teams' }">
            <div class="drop drop-1">
              <!-- <svg-icon type="mdi" :path="path.teams.karate"></svg-icon>
              <svg-icon type="mdi" :path="path.teams.female"></svg-icon>
              <svg-icon type="mdi" :path="path.teams.lifter"></svg-icon> -->
              <svg-icon type="mdi" :path="path.teams.team"></svg-icon>
            </div>
            <div class="caption main">
              Teams
            </div>
          </router-link>
        </div>
        <div class="drop-container container-2">
          <router-link :to="{ name: 'Clients' }">
            <div class="drop drop-2">
              <svg-icon type="mdi" :path="path.clients"></svg-icon>
            </div>
            <div class="caption">
              Clients
            </div>
          </router-link>
        </div>
        <div class="drop-container container-3">
          <router-link :to="{ name: 'Projects' }">
            <div class="drop drop-3">
              <svg-icon type="mdi" :path="path.projects"></svg-icon>
            </div>
            <div class="caption">
              Projects
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHandshake, mdiElectronFramework, mdiHumanFemale, mdiKarate, mdiWeightLifter, mdiAccountGroup } from '@mdi/js'

export default {
  name: "Home",
  components: {
    SvgIcon,
  },
    data () {
    return {
      path: {
        clients: mdiHandshake,
        projects: mdiElectronFramework, //mdi-palette
        teams: {
          female: mdiHumanFemale,
          karate: mdiKarate,
          lifter: mdiWeightLifter,
          team: mdiAccountGroup
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');

.title {
  // font-family: 'Fira Sans', sans-serif;
  color: $light;
  font-size: 50px;
  padding-top: 20px;
  padding-bottom: 30px;
  text-align: center;
}

.container {
  margin-top: 20px;
}

.drops {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .drop-container {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      text-align: center;
      text-decoration: none;
    }

    &.container-1 {
      a {
        .drop-1 {
          height: 170px;
          width: 170px;

          svg {
            position: absolute;
            color: $light;
            // &:nth-child(1) {
            //   transform: translate(-160%, -40%) scale(3);
            // }

            // &:nth-child(2) {
            //   transform: translateY(100%) scale(4);
            // }

            // &:nth-child(3) {
            //   transform: translate(160%, -40%) scale(3);
            // }
          }
        }
      }

    }

    &.container-2 {
      a {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        .drop-2 {
          height: 150px;
          width: 150px;
        }
        .caption {
          margin-right: 25px;
        }
      }
    }

    &.container-3 {
      .drop-3 {
        height: 130px;
        width: 130px;
      }
    }

    &.container-1, &.container-3 {
      a {
        display: flex;
        align-items: center;
        .caption {
          margin-left: 25px;
        }
      }
    }

    .caption {
      color: $light;
      font-family: 'Fira Sans', sans-serif;
      margin: 10px auto 20px;
      font-size: 20px;
      &.main {
        font-size: 30px;
      }
    }
  }
}

.drop {
  background: rgba(255,255,255, 0.06);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 50%;

  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: $white;
    transform: scale(4);
  }
}
</style>
