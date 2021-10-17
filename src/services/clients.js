import { baseFetcher } from "./api";

class ClientsAPI {
	constructor(baseFetcher) {
		this.baseFetcher = baseFetcher;
	}

	createClient (data) {
		return this.baseFetcher.post("/clients", data)
	}
}

export const clientsAPI = new ClientsAPI(baseFetcher);