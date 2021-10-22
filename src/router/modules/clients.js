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
    },
  },
  {
    path: "/edit/clients",
    name: "EditClients",
    component: EditClients,
    meta: {
      title: 'EditClients',
    },
  },
  {
    path: "/edit/client/:id",
    name: "EditClient",
    component: EditClient,
    meta: {
      title: 'EditClient',
    },
  },
  {
    path: "/create-client",
    name: "CreateClient",
    component: CreateClient,
    meta: {
      title: 'CreateClient',
    },
  },
  {
    path: "/client-profile/:id",
    name: "ClientProfile",
    component: ClientProfile,
    meta: {
      title: 'ClientProfile',
    },
  },
]

export default routes