import { canNavigate } from '../index'
import Clients from '../../views/Clients.vue'
import CreateClient from "../../views/ClientCreate.vue";
import EditClients from '../../views/ClientsEdit.vue'
import EditClient from "../../views/ClientEdit.vue";
import ClientProfile from "../../views/ClientProfile.vue";

const routes = [
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
    meta: {
      title: 'Clients',
      requireAuth: false
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/edit/clients",
    name: "EditClients",
    component: EditClients,
    meta: {
      title: 'EditClients',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/edit/client/:id",
    name: "EditClient",
    component: EditClient,
    meta: {
      title: 'EditClient',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/create-client",
    name: "CreateClient",
    component: CreateClient,
    meta: {
      title: 'CreateClient',
      requireAuth: true
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
  {
    path: "/client-profile/:id",
    name: "ClientProfile",
    component: ClientProfile,
    meta: {
      title: 'ClientProfile',
      requireAuth: false
    },
    beforeEnter (to, from, next) {
      canNavigate(to.meta, next)
    }
  },
]

export default routes