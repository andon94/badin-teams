import { canNavigate } from '../index'
import Employees from '../../views/Employees.vue'
import EmployeeProfile from '../../views/EmployeeProfile.vue'
import AddEmployee from '../../views/EmployeeAdd.vue'
import EditEmployees from "../../views/EmployeesEdit.vue";
import EditEmployee from "../../views/EmployeeEdit.vue";

const routes = [
  {
    path: "/employees/:id",
    name: "Employees",
    component: Employees,
    meta: {
      title: 'Employees',
      requireAuth: false
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/employee-profile/:id",
    name: "EmployeeProfile",
    component: EmployeeProfile,
    meta: {
      title: 'EmployeeProfile',
      requireAuth: false
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/add-employee",
    name: "AddEmployee",
    component: AddEmployee,
    meta: {
      title: 'AddEmployee',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/edit/employees",
    name: "EditEmployees",
    component: EditEmployees,
    meta: {
      title: 'EditEmployees',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/edit/employee/:id",
    name: "EditEmployee",
    component: EditEmployee,
    meta: {
      title: 'EditEmployee',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  }
]

export default routes