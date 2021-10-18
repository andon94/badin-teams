<template>
  <form class="edit-team"
        @submit.prevent="editTeam">
    <BaseInput :placeholder="'Team name'"
                v-model="team.name"/>
    <div>
      <div v-for="(client, i) in teamClients" :key="i">
        {{client.name}}
      </div>
    </div>
    <BaseInput :placeholder="'Client'"
               name="name"
               :selectArr="teamClients"
               v-model="client"/>
    <div>
      <div v-for="(project, i) in teamProjects" :key="i">
        {{project.name}}
      </div>
    </div>
    <BaseInput :placeholder="'Project'"
               name="name"
               :selectArr="teamProjects"
               v-model="project"/>
    <TextareaInput placeholder="About team"
                   v-model="team.about"/>
    <BaseButton type="submit"
                text="Submit"/>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import TextareaInput from '../components/BaseComponents/TextareaInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'

export default {
  name: 'EditTeam',
  components: {
    BaseInput,
    TextareaInput,
    BaseButton
  },
  data () {
    return {
      client: '',
      project: ''
    }
  },
  mounted() {
    this.fetchTeam(this.$route.query.id)
    this.fetchTeamProjects(this.$route.query.id)
    this.fetchTeamClients(this.$route.query.id)
  },
  computed: {
    ...mapGetters(['team', 'teamMembers', 'teamProjects', 'teamClients']),
  },
  methods: {
    ...mapActions(['fetchTeam', 'fetchTeamMembers', 'fetchTeamProjects', 'fetchTeamClients']),
    editTeam () {
      console.log('edit')
    }
  }
}
</script>

<style scoped lang="scss">
.edit-team {
  margin: 20px 10px;
}
</style>


