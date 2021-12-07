<template>
  <div class="photo-container">
    <div class="input-container"
         v-if="!uploaded">
      <label v-show="!photoPath">{{label}}</label>
      <input type="file"
             @input="onInput">
    </div>
    <div class="img-container">
      <img :src="image || uploaded">
    </div>
    <div class="remove-img"
         v-if="uploaded "
         @click="removeImage">
      <svg-icon type="mdi" :path="path.close"></svg-icon>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'

export default {
  name: 'PhotoInput',
  components: {
    SvgIcon
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    photoPath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      baseUrl: process.env.VUE_APP_API_BASE_URL,
      uploaded: null,
      path: {
        close: mdiClose,
      }
    }
  },
  computed: {
    image () {
      if (this.photoPath && this.uploaded) return null
      else if (this.photoPath && !this.uploaded) return `${this.baseUrl}/${this.photoPath}`
      else return null
    }
  },
  methods: {
    onInput (e) {
      this.$emit('fileSelected', e.target.files[0])
      this.uploaded = URL.createObjectURL(e.target.files[0])
    },
    removeImage () {
      this.uploaded = null
      this.$emit('fileSelected', null)
    }
  }
}
</script>

<style scoped lang="scss">
.photo-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-bottom: 140px;
  .input-container {
    label {
      position: absolute;
      transform: translateX(-50%);
      padding-top: 60px;
      z-index: 2;
      font-size: 14px;
      font-weight: bold;
      margin: 0 0 10px;
      pointer-events: none;
      width: 100px;
      text-align: center;
      color: $light;
    }

    input {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 20px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      z-index: 1;
      opacity: 0;
      &::-webkit-file-upload-button {
        display: none;
      }
    }
  }
  .img-container {
    position: absolute;
    top: 20px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background-color: $badin-color;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      height: 100px;
      transform: scale(1.1);
    }
  }

  .remove-img {
    position: absolute;
    color: $light;
    top: 100px;
    right: 80px;
    z-index: 10;
  }
}
</style>