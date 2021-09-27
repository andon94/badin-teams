<template>
  <div class="add-employee">
    <TeamOrEmployee />
    <form @submit.prevent>
      <SelectInput :placeholder="'Employee name'"
                   @inputValue="setName"/>
      <SelectInput :placeholder="'Employee title'"
                   :selectArr="titles"
                   @inputValue="setTitle"/>
      <SelectInput :placeholder="'Employee seniority'"
                   :selectArr="seniorities"
                   @inputValue="setSeniority"/>
      <div class="skills">
        <SelectInput :placeholder="'Add a skill'"
                     :buttonInput="true"
                     :reactive="false"
                     @inputValue="setSkill"
                     class="skills-input"/>
        <ul class="skill-list">
          <li v-for="(skill, i) in skills" :key="skill+i"
              @click="removeSkill(skill)">
            {{skill}}
          </li>
        </ul>
      </div>
      <button type="submit"
              class="submit-button"
              @click.prevent="addNewEmployee()">
        Create
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SelectInput from '../components/SmallComponents/SelectInput.vue'
import TeamOrEmployee from '../components/SmallComponents/TeamOrEmploye.vue'

export default {
  name: 'AddEmployee',
  components: {
    SelectInput,
    TeamOrEmployee,
  },
  data() {
    return {
      name: '',
      title: '',
      titles: ['Frontend developer', 'Backend developer', 'QA', 'Designer'],
      seniority: '',
      seniorities: ['junior', 'medior', 'senior'],
      skill: '',
      skills: []
    }
  },
  computed: {
    ...mapGetters(['newEmployee']),
  },
  watch: {
    newEmployee() {
      this.$router.push({ path: `/employee-profile/${this.newEmployee.id}`})
    }
  },
  methods: {
    ...mapActions(['addEmployee']),
    addNewEmployee() {
      const name = this.name
      const title = this.title
      const seniority = this.seniority
      const extra = this.skills

      if(name, title, seniority) {
        const obj = {
          name,
          title,
          seniority,
          extra
        }
        this.addEmployee(obj)
      }
    },
    setName(val) {
      this.name = val
    },
    setTitle(val) {
      this.title = val
    },
    setSeniority(val) {
      this.seniority = val
    },
    setSkill(val) {
      this.skills.push(val)
    },
    removeSkill(val) {
      this.skills = this.skills.filter(skill => skill !== val)
    }
  }
}
</script>

<style scoped lang="scss">
.add-employee {
  margin: 20px 10px;

  form {
    .skills {
      display: flex;
      flex-direction: column-reverse;

      .skills-input {
        margin-top: -5px;
      }

      .skill-list {
        padding: 10px;
        border: 3px dashed black;
        border-radius: 10px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        height: 100px;
        overflow: scroll;

        li {
          list-style-type: none;
          font-weight: bold;
          font-size: 14px;
          margin: 5px;
          padding: 5px 10px;
          background-color: black;
          color: white;
          border-radius: 10px;
          display: inline-block;
        }
      }

    }

    .submit-button {
      background: black;
      outline: none;
      border: none;
      color: white;
      font-weight: bold;
      padding: 10px 20px;
      border-radius: 10px;
    }
  }
}
</style>