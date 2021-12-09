<template>
  <div class="photo-container">
    <div class="input-container"
         v-if="!uploaded"
         @click="handleModal">
      <input type="file"
             @input="onInput"
             ref="photoInput">
    </div>
    <div class="img-container"
         @click="handleModal">
      <img :src="image || uploaded">
    </div>
    <BaseModal header="Image"
               primary="Add image"
               secondary="Remove image"
               @primaryAction="handleInput"
               @secondaryAction="removeImage"
               @close="modalIsVisible = false"
               :visible="modalIsVisible"/>
  </div>
</template>

<script>
import BaseModal from './BaseModal.vue'

export default {
  name: 'PhotoInput',
  components: {
    BaseModal
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
      modalIsVisible: false,
      photoRemoved: false
    }
  },
  computed: {
    image () {
      if (this.photoRemoved) return null
      else if (this.photoPath && this.uploaded) return null
      else if (this.photoPath && !this.uploaded) return `${this.baseUrl}/${this.photoPath}`
      else return null
    }
  },
  methods: {
    onInput (e) {
      this.$emit('fileSelected', e.target.files[0])
      this.uploaded = URL.createObjectURL(e.target.files[0])
      this.modalIsVisible = false
    },
    removeImage () {
      if (!this.uploaded) this.photoRemoved = true
      this.$emit('fileSelected', null)
      this.uploaded = null
      this.modalIsVisible = false
    },
    handleModal () {
      if (!this.modalIsVisible) this.modalIsVisible = true
    },
    handleInput () {
      this.$refs.photoInput.click()
    }
  }
}
</script>

<style scoped lang="scss">
.photo-container {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 30px;

  .input-container {
    transition: all ease-in 0.2s;
    cursor: pointer;

    input {
      opacity: 0;
      height: 0;
      width: 0;

      &::-webkit-file-upload-button {
        display: none;
      }
    }
  }
  .img-container {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background-color: $badin-color;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      width: 150px;
      height: 150px;
    }

    img {
      width: 100px;
      transform: scale(1.1);

      @media (min-width: 768px) {
        min-width: 140px;
        width: unset;
        height: unset;
        cursor: pointer;
      }
    }
  }
}
</style>