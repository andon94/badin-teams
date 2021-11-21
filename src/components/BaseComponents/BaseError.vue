<template>
  <div class="error" v-if="error !== null">
    <div @click="clear"
         class="icon-div">
      <svg-icon type="mdi" :path="path.close"></svg-icon>
    </div>
    <div>
      {{errorMessage}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'

export default {
  name: 'Error',
  components: {
    SvgIcon
  },
  mounted () {
    setTimeout(() => {
      this.clear()
    }, 5000)
  },
  computed: {
    ...mapGetters(['error']),
    errorMessage () {
      console.log(this.error)
      if (this.error !== null) {
        const error = this.error
        console.log(error.response, error.message);

        if (error.response) return error.response.data.errorMessage || error.message
        else return error.message
      } else return null
    }
  },
  data () {
    return {
      path: { close: mdiClose }
    }
  },
  methods: {
    ...mapMutations(['setError']),
    clear () {
      this.setError(null)
    }
  }
}
</script>

<style scoped lang="scss">
.error {
  position: fixed;
  width: 100%;
  top: calc(100vh - 85px);
  padding: 40px 10px 30px 10px;
  background: $dark;
  border-top: 1px white solid;
  z-index: 11;
  .icon-div {
    position: absolute;
    top: 10px;
    right: 10px;
    svg {
      color: $white;
    }
  }
}
</style>