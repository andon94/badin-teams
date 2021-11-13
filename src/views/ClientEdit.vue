<template>
  <Loader v-if="!name"/>
  <form class="edit"
        v-else
        @submit.prevent="editClient">
    <PhotoInput label="Edit photo"
                @fileSelected="setImage"/>
    <BaseInput :placeholder="'Client name'"
                v-model="name"/>
    <TextareaInput placeholder="About client"
                   v-model="about"/>
    <div class="button-container">
      <BaseButton type="submit"
                  text="Submit"/>
      <DeleteUnit label="client"/>
    </div>
  </form>
</template>

<script>
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
      logo: null
    }
  },
  mounted () {
    this.fetchClient()
  },
  methods: {
    setImage (val) {
      this.image = val
    },
    fetchClient () {
      clientsApi.fetchClient(this.$route.query.id)
        .then(res => {
          this.name = res.name
          this.about = res.about
          this.id = res.id
        })
        .catch(err => {
          console.log(err)
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

          if (this.image) {
            clientsApi.createClientPhoto(res.id, bodyFormData)
              .then(() => {
                this.$router.push({path:'/client-profile/:id', query:{id: res.id}})
              })
              .catch(err => {
                console.log(err)
              })
          } else {
            this.$router.push({path:'/client-profile/:id', query:{id: res.id}})
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/edit-item.scss';
</style>


