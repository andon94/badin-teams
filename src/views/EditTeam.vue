<template>
  <form class="edit-team">
  <!-- <form class="edit-team"
        @click.prevent="editTeam">
    <BaseInput :placeholder="'Team name'"
                v-model="teamName"/>
    <BaseInput :placeholder="'Client name'"
                :selectArr="clients"
                v-model="clientName"/>
    <BaseInput :placeholder="'Project'"
                :selectArr="projects"
                v-model="project"/>
    <TextareaInput placeholder="About team"/>
    <AddEmployees />
    <EmployeeList />
    <BaseButton text="Submit"/> -->
  </form>
</template>

<script>
// import { mapActions } from 'vuex'
// import BaseInput from '../components/BaseComponents/BaseInput.vue'
// import TextareaInput from '../components/BaseComponents/TextareaInput.vue'
// import EmployeeList from '../components/Teams/ColectiveComponents/EmployeeComponents/EmployeeList.vue'
// import AddEmployees from '../components/EditTeam/AddEmployees.vue'
// import BaseButton from '../components/BaseComponents/BaseButton.vue'

// export default {
//   name: 'EditTeam',
//   components: {
//     BaseInput,
//     TextareaInput,
//     EmployeeList,
//     AddEmployees,
//     BaseButton
//   },
//   data () {
//     return {
//       teamName: '',
//       clientName: '',
//       clients: ['Laf', 'Super Top', 'Joca i Nena', 'Dagi'],
//       project: '',
//       projects: ['Menhetn', 'Pustinjska oluja', 'X']
//     }
//   },
//   mounted() {
//     let routeId = this.$route.params.id
//     this.fetchTeam(routeId)
//   },
//   methods: {
//     ...mapActions(['fetchTeam']),
//     editTeam () {
//     }
//   }
// }
</script>

<style scoped lang="scss">
// .edit-team {
//   margin: 0 10px;
// }
</style>


