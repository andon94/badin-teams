<template>
  <div class="bubble-wrap">
    <div class="bubble-container"
         ref="bubbleContainer">
      <Bubble v-for="(bubble, i) in bubbleArr" :key="i + key"
              :bubble="bubble"
              @bubbleMouseover="handleBubbleMouseover"
              @bubbleMouseleave="handleBubbleMouseleave"/>
      <p class="bubble-name">{{ bubbleName }}</p>
    </div>
  </div>
</template>

<script>
import Bubble from './Bubble.vue'

export default {
  name: 'BubbleContainer',
  components: {
    Bubble
  },
  props: {
    teams: {
      type: Array,
      default: () => []
    },
    employees: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      allTeamsArr: [],
      allTeamEmployeesArr: [],
      semiDiameter: 0,
      bubbleDeg: 0,
      key: 1,
      padding: 0,
      bubbleName: ''
    }
  },
  computed: {
    bubbleArr () {
      const arr = []
      if (this.teams.length) {
        this.teams.forEach(team => {
          const position = {
            top: 0,
            left: 0
          }
          arr.push({
            name: team.name,
            id: team.id,
            img: team.imageViewPath,
            position
          })
        })
      } else if (this.employees.length) {
        this.employees.forEach(employee => {
          const position = {
            top: 0,
            left: 0
          }
          arr.push({
            firstName: employee.firstName,
            lastName: employee.lastName,
            id: employee.id,
            img: employee.imageViewPath,
            position
          })
        })
      }
      return arr
    }
  },
  watch: {
    bubbleArr () {
      if (this.bubbleArr.length) this.arrangeBubbles()
    }
  },
  created() {
    window.addEventListener("resize", this.resize);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
  mounted () {
    // pola visine bubble-a plus po 30 piksela za marginu
    const width = window.innerWidth
    if (width > 768) this.padding = 60
    else this.padding = 30
    this.calculateSemiDiameter()
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
              top: this.semiDiameter + this.padding,
              left: this.semiDiameter + this.padding
            }
        } else if (this.bubbleArr.length === 2) {

          this.bubbleArr[0].position = {
            top: 0 + this.padding,
            left: this.semiDiameter + this.padding
          }

          this.bubbleArr[1].position = {
            top: this.semiDiameter * 2 + this.padding,
            left: this.semiDiameter + this.padding
          }

        } else if (this.bubbleArr.length === 3) {

          const obj = this.calculateSinCos(this.semiDiameter, 1)

          this.bubbleArr[0].position = {
            top: this.padding,
            left: this.semiDiameter + this.padding
          }

          this.bubbleArr[1].position = {
            top: obj.b + this.padding,
            left: obj.c + this.padding
          }

          this.bubbleArr[2].position = {
            top: obj.b + this.padding,
            left: this.semiDiameter * 2 - obj.c + this.padding
          }

        } else if (this.bubbleArr.length === 4) {
          this.bubbleArr[0].position = {
            top: 0 + this.padding,
            left: this.semiDiameter + this.padding
          }

          this.bubbleArr[1].position = {
            top: this.semiDiameter + this.padding,
            left: this.semiDiameter * 2 + this.padding
          }

          this.bubbleArr[2].position = {
            top: this.semiDiameter * 2 + this.padding,
            left: this.semiDiameter + this.padding
          }

          this.bubbleArr[3].position = {
            top: this.semiDiameter + this.padding,
            left: 0 + this.padding
          }
        }
      } else {

        this.bubbleArr.forEach((bubble, i) => {

          if (i === 0) {
            bubble.position = {
              top: 0 + this.padding,
              left: this.semiDiameter + this.padding
            }
          } else {
            const obj = this.calculateSinCos(this.semiDiameter, i)
            bubble.position = {
              top: obj.b + this.padding,
              left: obj.c + this.padding
            }
          }
        })
      }
    },
    calculateSemiDiameter () {
      this.semiDiameter =  (this.$refs.bubbleContainer.offsetHeight / 2) - this.padding
    },
    recalculate () {
      const width = window.innerWidth
      if (width > 768) this.padding = 60
      else this.padding = 30

      this.calculateSemiDiameter()
      this.arrangeBubbles()
      this.key++
    },
    resize () {
      let timeOutFunctionId;
      clearTimeout(timeOutFunctionId);
      timeOutFunctionId = setTimeout(this.recalculate, 500);
    },
    handleBubbleMouseover (bubble) {
      if (bubble.name) return this.bubbleName = bubble.name
      else return this.bubbleName = `${bubble.firstName} ${bubble.lastName}`
    },
    handleBubbleMouseleave () {
      this.bubbleName = ''
    }
  }
}
</script>

<style scoped lang="scss">
.bubble-wrap {
  position: relative;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  .bubble-container {
    position: relative;
    width: 300px;
    height: 300px;

    margin: 5vh auto 5vh;
    border-radius: 50%;

    transition: all ease-in 0.2s;
    @media (min-width: 768px) {
      width: 500px;
      height: 500px;
    }

    @media (min-width: 1024px) {
      margin-top: 0;
      width: 650px;
      height: 650px;
    }

    .bubble-name {
      font-weight: bold;
      color: $light;
      font-size: 22px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%);
      transition: all ease-in 0.25;
    }
  }

  .heading-container {
    @media (min-width: 1024px) {
      position: absolute;
      top: calc(100vh - 280px);
      right: 20px;
      z-index: 100;
    }
    .heading, .caption {
      color: $light;
      font-size: 40px;
      text-align: center;
    }
    .heading {
      margin-top: 30px;
    }
    .caption {
      font-size: 30px;
    }
  }
}
</style>