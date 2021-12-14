<template>
  <Loader v-if="!name"/>
  <div v-else class="edit-container">
    <form class="edit"
          @submit.prevent="editClient">
      <PhotoInput label="Edit photo"
                  @fileSelected="setImage"
                  :photoPath="logo"/>
      <BaseInput :placeholder="'Client name'"
                  rules="required|characters:50"
                  v-model="name"/>
      <TextareaInput placeholder="About client"
                    rules="characters:200"
                    v-model="about"/>
      <div class="button-container">
        <BaseButton type="submit"
                    text="Submit"/>
        <DeleteUnit label="client"/>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { clientsApi } from '../services/api/clients.js'
import Loader from '../components/BaseComponents/Loader.vue'
import PhotoInput from '../components/BaseComponents/PhotoInput.vue'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import TextareaInput from '../components/BaseComponents/TextareaInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'
import DeleteUnit from '../components/DeleteUnit/DeleteUnit.vue'

export default {
  name: 'EditClient',
  components: {
    Loader,
    PhotoInput,
    BaseInput,
    TextareaInput,
    BaseButton,
    DeleteUnit
  },
  data () {
    return {
      name: '',
      about: '',
      id: '',
      logo: null,
      fileRemoved: false
    }
  },
  mounted () {
    this.fetchClient()
  },
  methods: {
    ...mapMutations(['setError']),
    setImage (val) {
      this.image = val
      if (val) this.fileRemoved = false
      else this.fileRemoved = true
    },
    fetchClient () {
      clientsApi.fetchClient(this.$route.query.id)
        .then(res => {
          this.name = res.name
          this.about = res.about
          this.id = res.id
          this.logo = res.imageViewPath
        })
        .catch(err => {
          this.setError(err)
        })
    },
    editClient () {
      const data = {
        name: this.name,
        about: this.about,
        logo:  this.logo
      }

      clientsApi.editClient(this.$route.query.id, data)
        .then(res => {
          const bodyFormData = new FormData();
          bodyFormData.append('file', this.image);
          const route = {path:'/client-profile/:id', query:{id: res.id}}
          if (this.image) {
            clientsApi.createClientPhoto(res.id, bodyFormData)
              .then(() => {
                this.$router.push(route)
              })
              .catch(err => {
                this.$router.push(route)
                this.setError(err)
              })
          } else if (this.fileRemoved) {
            clientsApi.deleteEmployeePhoto(this.client.logo)
              .then(() => {
                this.$router.push(route)
              })
              .catch(err => {
                this.$router.push(route)
                this.setError(err)
              })
          } else {
            this.$router.push(route)
          }
        })
        .catch(err => {
          this.setError(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/edit-item.scss';
</style>


