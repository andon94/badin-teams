<template>
  <div class="new-item">
    <ValidationObserver ref="createClientForm"
                        v-slot="{ invalid }">
      <form @submit.prevent>
        <PhotoInput label="Add a photo"
                    @fileSelected="setImage"/>
        <BaseInput :placeholder="'Client name'"
                  v-model="clientName"
                  rules="required"/>
        <TextareaInput placeholder="About client"
                      v-model="about"/>
        <BaseButton text="Create"
                    :disabled="invalid"
                    @click="handleCreate"/>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { clientsApi } from '../../services/api/clients'
import PhotoInput from '../BaseComponents/PhotoInput.vue'
import BaseInput from '../BaseComponents/BaseInput.vue'
import TextareaInput from '../BaseComponents/TextareaInput.vue'
import BaseButton from '../BaseComponents/BaseButton.vue'

export default {
  name: 'NewClient',
  components: {
    PhotoInput,
    BaseInput,
    TextareaInput,
    BaseButton
  },
  data() {
    return {
      clientName: '',
      about: ''
    }
  },
  methods: {
    setImage (val) {
      this.image = val
    },
    handleCreate () {
      this.$refs.createClientForm.validate().then(success => {
        if (!success) {
          return
        } else {
          this.createClient()
        }
      })
    },
    createClient () {
      const data = {
        name: this.clientName,
        about: this.about,
        logo: null
      }

      clientsApi.createClient(data)
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
          } else this.$router.push({path:'/client-profile/:id', query:{id: res.id}})

        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/create-item.scss';
</style>
