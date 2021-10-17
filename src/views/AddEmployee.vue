<template>
  <div class="add-employee">
    <form @submit.prevent>
      <PhotoInput label="Add a profile photo:"
                  photoPath=""/>
      <BaseInput :placeholder="'First name'"
                   v-model="firstName"/>
      <BaseInput :placeholder="'Last name'"
                   v-model="lastName"/>
      <BaseInput :placeholder="'Nickname'"
                   v-model="nickName"/>
      <BaseInput :placeholder="'Email'"
                   v-model="email"/>
      <BaseInput :placeholder="'Position'"
                   v-model="position"/>
      <BaseInput :placeholder="'Team'"
                 :name="'name'"
                 :selectArr="teams"
                 v-model="team"/>
      <BaseInput :placeholder="'Client'"
                   :selectArr="clients"
                   v-model="client"/>
      <BaseInput :placeholder="'Project'"
                 :selectArr="projects"
                 v-model="project"/>
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
      <!-- <div class="skills">
        <BaseInput :placeholder="'Add skills'"
                     :buttonInput="true"
                     v-model="skill"
                     class="skills-input"
                     @btnClick="setSkill"/>
        <ul class="skill-list">
          <li v-for="(skill, i) in skills" :key="skill+i"
              @click="removeSkill(skill)">
            {{skill}}
          </li>
        </ul>
      </div> -->
      <BaseButton type="submit"
                  text="Create"
                  @click="addNewEmployee"
                  class="submit-button"/>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { employeesApi } from '../services/employees.js'
import BaseInput from '../components/BaseComponents/BaseInput.vue'
import PhotoInput from '../components/BaseComponents/PhotoInput.vue'
import BaseButton from '../components/BaseComponents/BaseButton.vue'

export default {
  name: 'AddEmployee',
  components: {
    BaseInput,
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
      clients: [],
      seniority: '',
      seniorities: ['Junior', 'Medior', 'Senior'],
      workArea: '',
      workAreas: ['Frontend developer', 'Backend developer', 'QA', 'Designer', 'HR', 'Staff'],
      lead: '',
      leads: ['Tech Lead', 'Product owner', 'People manager'],
      mainTech: '',
      project: '',
      projects: []
    }
  },
  mounted () {
    if (!this.teams.length) this.fetchTeams()
  },
  computed: {
    ...mapGetters(['teams']),
  },
  methods: {
    ...mapActions(['fetchTeams']),
    addNewEmployee() {
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
        teams: [this.team.id],
        clients: [],
        projects: []
      }

      employeesApi.createEmployee(data)
        .then(res => {
          this.$router.push({path:'/employee-profile/:id', query:{id: res.id}})
        })
        .catch(err => {
          console.log(err)
        })
      }
    // }
    // setSkill() {
    //   // kad ubacis validaciju, ubaci i poruku da postoji identican
    //   const exists = this.skills.find(skill => skill === this.skill)
    //   if (this.skill !== '' && !exists) {
    //     this.skills.push(this.skill)
    //     this.skill = ''
    //   }
    // },
    // removeSkill(val) {
    //   this.skills = this.skills.filter(skill => skill !== val)
    // }
  }
}
</script>

<style scoped lang="scss">
.add-employee {
  margin: 15px 10px;

  form {
    // .skills {
    //   display: flex;
    //   flex-direction: column-reverse;

    //   .skills-input {
    //     margin-top: -5px;
    //   }

    //   .skill-list {
    //     padding: 10px;
    //     border: 3px dashed black;
    //     border-radius: 10px;
    //     border-bottom-right-radius: 0;
    //     border-bottom-left-radius: 0;
    //     border-top-left-radius: 0;
    //     height: 100px;
    //     overflow: scroll;

    //     li {
    //       list-style-type: none;
    //       font-weight: bold;
    //       font-size: 14px;
    //       margin: 5px;
    //       padding: 5px 10px;
    //       background-color: black;
    //       color: white;
    //       border-radius: 10px;
    //       display: inline-block;
    //     }
    //   }
    // }

    .submit-button {
      margin-top: 0;
    }
  }
}
</style>