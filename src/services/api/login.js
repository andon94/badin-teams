import { baseFetcher } from "./api";

class AuthAPI {
	constructor(baseFetcher) {
		this.baseFetcher = baseFetcher;
	}

	login(data) {
		return this.baseFetcher.post("/login", data)
	}
}

export const authAPI = new AuthAPI(baseFetcher);