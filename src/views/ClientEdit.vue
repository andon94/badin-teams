<template>
  <form class="edit-team"
        @submit.prevent="editClient">
    <PhotoInput />
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
import { clientsApi } from '../services/clients.js'
import PhotoInput from '../components/BaseComponents/PhotoInput.vue'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import TextareaInput from '../components/BaseComponents/TextareaInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'
import DeleteUnit from '../components/DeleteUnit/DeleteUnit.vue'

export default {
  name: 'EditTeam',
  components: {
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
      console.log(data)
      // bug na be, nema responsa
      clientsApi.editClient(this.$route.query.id, data)
        .then(res => {
          console.log(res)
          // this.$router.push({path:'/client-profile/:id', query:{id: res.id}})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.edit-team {
  margin: 20px 10px;
  .button-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>


