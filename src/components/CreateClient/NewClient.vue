<template>
  <div class="new-client">
    <form @submit.prevent>
      <PhotoInput label="Add a photo"
                  photoPath=""/>
      <BaseInput :placeholder="'Client name'"
                 v-model="clientName"/>
      <TextareaInput placeholder="About client"
                     v-model="about"/>
      <BaseButton text="Create"
                  @click="createClient"/>
    </form>
  </div>
</template>

<script>
import { clientsApi } from '../../services/clients'
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
    createClient () {
      const data = {
        name: this.clientName,
        about: this.about,
        logo: null
      }

      clientsApi.createClient(data)
        .then(res => {
          this.$router.push({path:'/client/:id', query:{id: res.id}})
        })
        .catch(err => {
          console.log(err)
        })

    }
  }
}
</script>

<style scoped lang="scss">
.new-client {
  margin: 35px 10px;

  form {
    .input-container {
      display: flex;
      margin-top: 20px;
    }
  }
}
</style>