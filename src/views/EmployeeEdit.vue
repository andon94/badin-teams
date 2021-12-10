<template>
  <Loader v-if="Object.keys(employee).length === 0"/>
  <div v-else class="edit-container">
    <form class="edit employee"
          @submit.prevent="editEmployee">
      <PhotoInput label="Edit photo"
                  @fileSelected="setImage"
                  :photoPath="employee.imageViewPath"/>
      <BaseInput :placeholder="'First name'"
                  rules="required|characters:30"
                  v-model="employee.firstName"/>
      <BaseInput :placeholder="'Last name'"
                  rules="required|characters:30"
                  v-model="employee.lastName"/>
      <BaseInput :placeholder="'Nickname'"
                  rules="characters:30"
                  v-model="employee.nickname"/>
      <BaseInput :placeholder="'Email'"
                  rules="required|characters:30"
                  v-model="employee.email"/>
      <BaseInput :placeholder="'Position'"
                  rules="required|characters:30"
                  v-model="employee.position"/>
      <BaseInput :placeholder="'Seniority'"
                  rules="characters:30"
                  v-model="employee.seniority"/>
      <BaseInput :placeholder="'Main technology'"
                  rules="characters:30"
                  v-model="employee.mainTechnology"/>
      <BaseInput :placeholder="'Working area'"
                 :selectArr="workAreas"
                 rules="characters:30"
                 v-model="employee.workingArea"/>
      <BaseInput :placeholder="'Lead'"
                  rules="characters:30"
                  v-model="employee.lead"/>
      <BaseArrayInput :dataArr="employeeTeams"
                      :selectArr="teams"
                      name="name"
                      placeholder="Teams"
                      @finalArr="handleTeam"/>
      <BaseArrayInput :dataArr="employeeClients"
                      :selectArr="clients"
                      name="name"
                      placeholder="Client"
                      @finalArr="handleClient"/>
      <BaseArrayInput :dataArr="employeeProjects"
                      :selectArr="projects"
                      name="name"
                      placeholder="Project"
                      @finalArr="handleProject"/>
      <div class="button-container">
        <BaseButton type="submit"
                    text="Submit"/>
        <DeleteUnit label="employee"/>
      </div>
    </form>
  </div>
</template>

<script>
import { employeesApi } from '../services/api/employees.js'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Loader from '../components/BaseComponents/Loader.vue'
import PhotoInput from '../components/BaseComponents/PhotoInput.vue'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import BaseArrayInput from '../components/BaseComponents/BaseArrayInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'
import DeleteUnit from '../components/DeleteUnit/DeleteUnit.vue'


export default {
  name: 'EditEmployee',
  components: {
    Loader,
    PhotoInput,
    BaseInput,
    BaseArrayInput,
    BaseButton,
    DeleteUnit
  },
  data () {
    return {
      workAreas: ['Frontend developer', 'Backend developer', 'QA', 'Designer', 'HR', 'Staff'],
      currentTeams: null,
      currentClients: null,
      currentProjects: null,
      image: null
    }
  },
  mounted() {
    this.fetchEmployee(this.$route.query.id)
    this.fetchEmployeeTeams(this.$route.query.id)
    this.fetchEmployeeProjects(this.$route.query.id)
    this.fetchEmployeeClients(this.$route.query.id)
    this.fetchTeams()
    this.fetchClients()
    this.fetchProjects()
  },
  computed: {
    ...mapGetters(['employee', 'employeeTeams', 'employeeProjects', 'employeeClients', 'teams', 'projects', 'clients']),
  },
  methods: {
    ...mapActions(['fetchEmployee', 'fetchEmployeeTeams', 'fetchEmployeeProjects', 'fetchEmployeeClients', 'fetchTeams', 'fetchProjects', 'fetchClients']),
    ...mapMutations(['setError']),
    handleTeam (val) {
      this.currentTeams = [...val]
    },
    handleClient (val) {
      this.currentClients = [...val]
    },
    handleProject (val) {
      this.currentProjects = [...val]
    },
    setImage (val) {
      this.image = val
    },
    editEmployee () {
      const teamIds = this.currentTeams.map(team => team.id)
      const clientIds = this.currentClients.map(client => client.id)
      const projectIds = this.currentProjects.map(project => project.id)

      const data = {
        email: this.employee.email,
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        nickname: this.employee.nickname,
        position: this.employee.position,
        image: null,
        seniority: this.employee.seniority,
        mainTechnology: this.employee.mainTechnology,
        workingArea: this.employee.mainArea,
        lead: this.employee.lead,
        teams: teamIds,
        clients: clientIds,
        projects: projectIds
      }

      employeesApi.editEmployee(this.$route.query.id, data)
        .then(res => {
          const bodyFormData = new FormData();
          bodyFormData.append('file', this.image);

          if (this.image) {
            employeesApi.createEmployeePhoto(res.id, bodyFormData)
              .then(() => {
                this.$router.push({path:'/employee-profile/:id', query:{id: res.id}})
              })
              .catch(err => {
                this.$router.push({path:'/employee-profile/:id', query:{id: res.id}})
                console.log(err)
              })
          } else {
            this.$router.push({path:'/employee-profile/:id', query:{id: res.id}})
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
