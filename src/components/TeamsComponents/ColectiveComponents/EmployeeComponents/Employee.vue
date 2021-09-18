<template>
  <li class="employee"

      ref="employee">
    <div class="employee-container" @click="selectEmployee()">
      <div class="employee-name">
        {{employee.name}}
      </div>
      <div class="employee-title">
        {{employee.title}}
      </div>
    </div>
    <div class="img-container">
      <div @click="openRemoveModal">
        <div v-if="$route.name === 'EditTeam' && imgClicked"
            @click="removeEmployeeFromTeam()">
          remove
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Employee',
  props: {
    employee: {
      type: Object,
      default: null
    },
    team: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      imgClicked: false
    }
  },
  methods: {
    ...mapActions(['updateTeam']),
    ...mapActions(['fetchTeamEmployees', 'removeFromTeam']),
    selectEmployee() {
      // proverava da li je element na koji se klikce pozicioniran u search dropdown-u ili u originalnoj listi clanova tima
      if (this.$refs.employee.parentNode.parentNode.className === 'employee-container') {
        const payload = {
          employeeId: this.employee.id,
          teamId: this.team.id
        }
        this.updateTeam(payload)
      } else if (this.$refs.employee.parentNode.parentNode.className === 'employee-list') {
        this.$store.commit('setSelectedEmployee', this.employee)
        this.$router.push({ path: `/employee-profile/${this.employee.id}`})
      }
    },
    openRemoveModal() {
      if (this.$route.name === 'EditTeam') this.imgClicked = true
    },
    removeEmployeeFromTeam() {
      const payload = {
        employeeId: this.employee.id,
        teamId: this.$store.state.teams.team.id
      }
      this.removeFromTeam(payload)
    }
  }
}
</script>

<style scoped lang="scss">
.employee {
  margin-bottom: 15px;
  list-style-type: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .employee-container {
    margin-right: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .employee-name {
      font-weight: bold;
    }
    .employee-title {
      font-size: 14px;
    }
  }

  .img-container {
    & > div {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: pink;

      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        padding: 5px;

      }
    }
  }
}
</style>