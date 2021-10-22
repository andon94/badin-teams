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
    },
  },
  {
    path: "/employee-profile/:id",
    name: "EmployeeProfile",
    component: EmployeeProfile,
    meta: {
      title: 'EmployeeProfile',
    },
  },
  {
    path: "/add-employee",
    name: "AddEmployee",
    component: AddEmployee,
    meta: {
      title: 'AddEmployee',
    },
  },
  {
    path: "/edit/employees",
    name: "EditEmployees",
    component: EditEmployees,
    meta: {
      title: 'EditEmployees',
    },
  },
  {
    path: "/edit/employee/:id",
    name: "EditEmployee",
    component: EditEmployee,
    meta: {
      title: 'EditEmployee',
    },
  }
]

export default routes