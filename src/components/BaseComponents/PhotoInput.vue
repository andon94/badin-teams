<template>
  <div class="photo-container">
    <div class="input-container"
         v-if="!uploaded">
      <label>{{label}}</label>
      <input type="file"
             @input="onInput">
    </div>
    <div class="img-container">
      <img :src="photoPath || uploaded">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoInput',
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
      uploaded: null
    }
  },
  methods: {
    onInput (e) {
      this.$emit('fileSelected', e.target.files[0])
      this.uploaded = URL.createObjectURL(e.target.files[0])
    }
  }
}
</script>

<style scoped lang="scss">
.photo-container {
  position: relative;
  margin: 20px 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-bottom: 140px;
  .input-container {
    label {
      position: absolute;
      transform: translateX(-50%);
      padding-top: 55px;
      z-index: 2;
      font-size: 14px;
      font-weight: bold;
      margin: 0 0 10px;
      pointer-events: none;
      width: 100px;
      text-align: center;
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
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background-color: pink;

    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>