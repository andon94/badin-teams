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

	createEmployeePhoto (id, data) {
		return this.baseFetcher.post(`/users/${id}/image`,
																	data,
																	{ headers: {'Content-Type':'multipart/form-data'} })
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

	editEmployee (id, data) {
		return this.baseFetcher.put(`/users/${id}`, data)
	}

	deleteEmployee (id) {
		return this.baseFetcher.delete(`/users/${id}`)
	}
}

export const employeesApi = new EmployeesAPI(baseFetcher);