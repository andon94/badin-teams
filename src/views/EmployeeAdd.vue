<template>
  <div class="add-employee">
    <ValidationObserver ref="createEmployeeForm"
                        v-slot="{ invalid }">
      <form @submit.prevent>
        <PhotoInput label="Add a profile photo"
                    @fileSelected="setImage"/>
        <BaseInput :placeholder="'First name'"
                   v-model="firstName"
                   rules="required"/>
        <BaseInput :placeholder="'Last name'"
                   v-model="lastName"
                   rules="required"/>
        <BaseInput :placeholder="'Nickname'"
                   v-model="nickName"/>
        <BaseInput :placeholder="'Email'"
                   v-model="email"
                   rules="required|email"/>
        <BaseInput :placeholder="'Position'"
                   v-model="position"
                   rules="required"/>
        <BaseArrayInput :selectArr="teams"
                        name="name"
                        placeholder="Team"
                        @finalArr="handleTeam"/>
        <BaseArrayInput :selectArr="clients"
                        name="name"
                        placeholder="Client"
                        @finalArr="handleClient"/>
        <BaseArrayInput :selectArr="projects"
                        name="name"
                        placeholder="Project"
                        @finalArr="handleProject"/>
        <BaseInput :placeholder="'Seniority'"
                   :selectArr="seniorities"
                   v-model="seniority"/>
        <BaseInput :placeholder="'Main tech'"
                   v-model="mainTech"/>
        <BaseInput :placeholder="'Work area'"
                   :selectArr="workAreas"
                   v-model="workArea"/>
        <BaseInput :placeholder="'Lead'"
                   :selectArr="leads"
                   v-model="lead"/>
        <BaseButton type="submit"
                    text="Create"
                    :disabled="invalid"
                    @click="handleCreate"
                    class="submit-button"/>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { employeesApi } from '../services/api/employees.js'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import BaseArrayInput from '../components/BaseComponents/BaseArrayInput.vue'
import PhotoInput from '../components/BaseComponents/PhotoInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'

export default {
  name: 'AddEmployee',
  components: {
    BaseInput,
    BaseArrayInput,
    PhotoInput,
    BaseButton
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      nickName: '',
      email: '',
      position: '',
      image: '',
      team: '',
      client: '',
      seniority: '',
      seniorities: ['Junior', 'Medior', 'Senior'],
      workArea: '',
      workAreas: ['Frontend developer', 'Backend developer', 'QA', 'Designer', 'HR', 'Staff'],
      lead: '',
      leads: ['Tech Lead', 'Product owner', 'People manager'],
      mainTech: '',
      project: '',
      employeeTeams: [],
      employeeClients: [],
      employeeProjects: []
    }
  },
  mounted () {
    if (!this.teams.length) this.fetchTeams()
    if (!this.clients.length) this.fetchClients()
    if (!this.projects.length) this.fetchProjects()
  },
  computed: {
    ...mapGetters(['teams', 'clients', 'projects']),
  },
  methods: {
    ...mapActions(['fetchTeams', 'fetchClients', 'fetchProjects']),
    setImage (val) {
      this.image = val
    },
    handleTeam (val) {
      this.employeeTeams = [...val]
    },
    handleClient (val) {
      this.employeeClients = [...val]
    },
    handleProject (val) {
      this.employeeProjects = [...val]
    },
    handleCreate () {
      this.$refs.createEmployeeForm.validate().then(success => {
        if (!success) {
          return
        } else {
          this.addNewEmployee()
        }
      })
    },
    addNewEmployee() {

      this.employeeTeams = this.employeeTeams.map(team => team.id)
      // privremeno badin tim id '66dfcc5e-7dbe-4e3b-b979-e10a2c6f2c51'
      this.employeeTeams.push('66dfcc5e-7dbe-4e3b-b979-e10a2c6f2c51')
      this.employeeClients = this.employeeClients.map(client => client.id)
      this.employeeProjects = this.employeeProjects.map(project => project.id)

      const data = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        nickname: this.nickName,
        position: this.position,
        image: null,
        seniority: this.seniority,
        mainTechnology: this.mainTech,
        workingArea: this.workArea,
        lead: this.lead,
        teams: this.employeeTeams,
        clients: this.employeeClients,
        projects: this.employeeProjects
      }

      employeesApi.createEmployee(data)
        .then(res => {
          const bodyFormData = new FormData();
          bodyFormData.append('file', this.image);

          if (this.image) {
            employeesApi.createEmployeePhoto(res.id, bodyFormData)
              .then(() => {
                this.$router.push({path:'/employee-profile/:id', query:{id: res.id}})
              })
              .catch(err => {
                console.log(err)
              })
          } else this.$router.push({path:'/employee-profile/:id', query:{id: res.id}})

        })
        .catch(err => {
          console.log(err)
        })
      }
  }
}
</script>

<style scoped lang="scss">
.add-employee {
  margin: 15px 10px;

  form {
    .submit-button {
      margin-top: 0;
    }
  }
}
</style>
