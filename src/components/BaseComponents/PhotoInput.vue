<template>
  <div class="photo-container">
    <div class="input-container">
      <label>{{label}}</label>
      <input type="file"
            @input="onInput">
    </div>
    <div class="img-container">
      <div v-if="!photoPath"></div>
      <img v-else
           :src="photoPath">
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
  methods: {
    onInput () {
      this.$emit('fileUploaded')
    }
  }
}
</script>

<style scoped lang="scss">
.photo-container {
  margin: 20px 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  .input-container {
    width: calc(100% - 100px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    label {
      font-size: 14px;
      font-weight: bold;
      margin: 0 0 10px;
    }
  }
  .img-container {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;

    div {
      width: 100%;
      height: 100%;
      background-color: pink;
    }
  }
}
</style>