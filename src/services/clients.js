import { baseFetcher } from "./api";

class ClientsAPI {
	constructor(baseFetcher) {
		this.baseFetcher = baseFetcher;
	}

	createClient (data) {
		return this.baseFetcher.post("/clients", data)
	}

	fetchClients () {
		return this.baseFetcher.get("/clients")
	}

	fetchClient (id) {
		return this.baseFetcher.get(`/clients/${id}`)
	}
}

export const clientsApi = new ClientsAPI(baseFetcher);