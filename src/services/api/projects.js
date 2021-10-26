import { baseFetcher } from "./api";

class ProjectsAPI {
	constructor(baseFetcher) {
		this.baseFetcher = baseFetcher;
	}

	createProject (data) {
		return this.baseFetcher.post("/projects", data)
	}

	fetchProjects () {
		return this.baseFetcher.get("/projects")
	}

	fetchProject (id) {
		return this.baseFetcher.get(`/projects/${id}`)
	}

	editProject (id, data) {
		return this.baseFetcher.put(`/projects/${id}`, data)
	}

	deleteProject (id) {
		return this.baseFetcher.delete(`/projects/${id}`)
	}
}

export const projectsApi = new ProjectsAPI(baseFetcher);