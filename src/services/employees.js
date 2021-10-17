import { baseFetcher } from "./api";

class EmployeesAPI {
	constructor(baseFetcher) {
		this.baseFetcher = baseFetcher;
	}

	createEmployee (data) {
		console.log(data)
		return this.baseFetcher.post("/users", data)
	}

  fetchEmployees () {
		return this.baseFetcher.get("/users")
  }

	fetchEmployee (id) {
		return this.baseFetcher.get(`/users/${id}`)
  }

	fetchEmployeeTeams (id) {
		return this.baseFetcher.get(`/users/${id}/teams`)
	}

	fetchEmployeeProjects (id) {
		return this.baseFetcher.get(`/users/${id}/projects`)
	}

	fetchEmployeeClients (id) {
		return this.baseFetcher.get(`/users/${id}/clients`)
	}
}

export const employeesApi = new EmployeesAPI(baseFetcher);