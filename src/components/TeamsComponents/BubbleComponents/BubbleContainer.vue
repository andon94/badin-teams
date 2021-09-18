<template>
  <div class="bubble-wrap">
    <div class="bubble-container"
         ref="bubbleContainer">
      <Bubble v-for="(bubble, i) in bubbleArr" :key="bubble.name+i"
              :bubble="bubble"/>
      <div class="back-to-teams"
           v-if="bubbleArr === allTeamEmployeesArr">
        <button @click="backToTeams()">
          teams
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Bubble from './Bubble.vue'

export default {
  name: 'BubbleContainer',
  components: {
    Bubble
  },
  data() {
    return {
      allTeamsArr: [],
      allTeamEmployeesArr: [],
      bubbleArr: [],
      semiDiameter: 0,
      bubbleDeg: 0
    }
  },
  computed: {
    ...mapGetters(['allTeamEmployees']),
    ...mapGetters(['allTeams']),
    ...mapGetters(['selectedTeam']),
  },
  watch: {
    allTeams() {
      const all = []
      this.allTeams.forEach(team => {
        const position = {
          top: 0,
          left: 0
        }
        all.push({
          name: team.name,
          id: team.id,
          position
        })
      })
      // privremeno resenje
      this.allTeamsArr = all
      this.bubbleArr = this.allTeamsArr
    },
    allTeamEmployees() {
      const all = []
      this.allTeamEmployees.forEach(employee => {
        const position = {
          top: 0,
          left: 0
        }
        const newEmployee = {...employee, position}
        all.push(newEmployee)
      })
      // privremeno resenje
      this.allTeamEmployeesArr = all
      this.bubbleArr = this.allTeamEmployeesArr
    },
    bubbleArr() {
      this.arrangeBubbles()
    }
  },
  mounted () {
    // pola visine bubble-a plus po 30 piksela za marginu
    this.semiDiameter = (this.$refs.bubbleContainer.offsetHeight / 2) - 60
  },
  methods: {
    toRadians (angle) {
      return angle * (Math.PI / 180);
    },
    calculateSinCos (semiDiameterVal, iteration) {
      const centerDeg = 360

      // acb angle
      this.bubbleDeg = (centerDeg / this.bubbleArr.length) * iteration

      if (this.bubbleDeg <= 90) {
        // ab
        const a = (semiDiameterVal * Math.sin(this.toRadians(this.bubbleDeg/2))) * 2

        // cab angle
        const bottomDeg = (180 - this.bubbleDeg) / 2

        // ae - vertical offset
        const b = Math.cos(this.toRadians(bottomDeg)) * a

        // eb - horizontal offset
        const squaredC = Math.pow(a, 2) - Math.pow(b, 2)
        let c = Math.sqrt(squaredC)
        c = c + semiDiameterVal

        return {
          b,
          c
        }
      } else if (this.bubbleDeg <= 180) {
        // ecb angle
        const sinAngle = 180 - this.bubbleDeg

        //ce vertical offset
        let b = Math.cos(this.toRadians(sinAngle)) * semiDiameterVal

        //eb horizontal offset
        const squaredC = Math.pow(semiDiameterVal, 2) - Math.pow(b, 2)
        let c = Math.sqrt(squaredC)
        c = c + semiDiameterVal
        b = b + semiDiameterVal

        return {
          b,
          c
        }
      } else if (this.bubbleDeg <= 270) {
        const sinAngle = 360 - this.bubbleDeg

        //ce vertical offset
        let b = Math.cos(this.toRadians(sinAngle)) * semiDiameterVal

        //eb horizontal offset
        const squaredC = Math.pow(semiDiameterVal, 2) - Math.pow(b, 2)
        let c = Math.sqrt(squaredC)
        c = semiDiameterVal - c
        b = b * -1 + semiDiameterVal

        return {
          b,
          c
        }
      } else if (this.bubbleDeg <= 360) {
        const sinAngle = 360 - this.bubbleDeg

        //ce vertical offset
        let b = Math.cos(this.toRadians(sinAngle)) * semiDiameterVal

        //eb horizontal offset
        const squaredC = Math.pow(semiDiameterVal, 2) - Math.pow(b, 2)
        let c = Math.sqrt(squaredC)

        c = semiDiameterVal - c
        b = semiDiameterVal - b

        return {
          b,
          c
        }
      }
    },
    arrangeBubbles () {
      if (this.bubbleArr.length <= 4) {

        if (this.bubbleArr.length === 1) {
            this.bubbleArr[0].position = {
              top: this.semiDiameter + 60,
              left: this.semiDiameter + 60
            }
        } else if (this.bubbleArr.length === 2) {

          this.bubbleArr[0].position = {
            top: 0 + 60,
            left: this.semiDiameter + 60
          }

          this.bubbleArr[1].position = {
            top: this.semiDiameter * 2 + 60,
            left: this.semiDiameter + 60
          }

        } else if (this.bubbleArr.length === 3) {

          const obj = this.calculateSinCos(this.semiDiameter, 1)

          this.bubbleArr[0].position = {
            top: 60,
            left: this.semiDiameter + 60
          }

          this.bubbleArr[1].position = {
            top: obj.b + 60,
            left: obj.c + 60
          }

          this.bubbleArr[2].position = {
            top: obj.b + 60,
            left: this.semiDiameter * 2 - obj.c + 60
          }

        } else if (this.bubbleArr.length === 4) {

          this.bubbleArr[0].position = {
            top: 0 + 60,
            left: this.semiDiameter + 60
          }

          this.bubbleArr[1].position = {
            top: this.semiDiameter + 60,
            left: this.semiDiameter * 2 + 60
          }

          this.bubbleArr[2].position = {
            top: this.semiDiameter * 2 + 60,
            left: this.semiDiameter + 60
          }

          this.bubbleArr[3].position = {
            top: this.semiDiameter + 60,
            left: 0 + 60
          }
        }
      } else {

        this.bubbleArr.forEach((bubble, i) => {

          if (i === 0) {
            bubble.position = {
              top: 0 + 60,
              left: this.semiDiameter + 60
            }
          } else {
            const obj = this.calculateSinCos(this.semiDiameter, i)
            bubble.position = {
              top: obj.b + 60,
              left: obj.c + 60
            }
          }
        })
      }
    },
    ...mapActions(['fetchTeamEmployees']),
    ...mapMutations(['clearTeam']),
    backToTeams () {
      // privremeno clearteam
      this.clearTeam()
      this.bubbleArr = this.allTeamsArr
    }
  }
}
</script>

<style scoped lang="scss">
.bubble-wrap {

  .bubble-container {
    position: relative;
    width: 300px;
    height: 300px;

    margin: 5vh auto 5vh;
    background: rgba(pink, 0.8);
    border-radius: 50%;

    transition: all ease-in 0.2s;

  }

  .back-to-teams {
    position: absolute;
    bottom: 0;
    right: 0;
    button {
      width: 40px;
      height: 40px;
      font-weight: bold;
      font-size: 9px;
      background-color: pink;
      border: none;
      border-radius: 50%;
      outline: none;
      // transform: translate(-50%,-50%);
    }
  }
}
</style>