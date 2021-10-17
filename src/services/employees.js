import { baseFetcher } from "./api";

class EmployeesAPI {
	constructor(baseFetcher) {
		this.baseFetcher = baseFetcher;
	}

	createEmployee (data) {
		return this.baseFetcher.post("/users", data)
	}

  fetchEmployees () {
		return this.baseFetcher.get("/users")
  }

	fetchEmployee (id) {
		return this.baseFetcher.get(`/users/${id}`)
  }

}

export const employeesApi = new EmployeesAPI(baseFetcher);