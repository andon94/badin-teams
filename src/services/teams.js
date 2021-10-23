import { baseFetcher } from "./api";

class TeamsAPI {
	constructor(baseFetcher) {
		this.baseFetcher = baseFetcher;
	}

	createTeam (data) {
		return this.baseFetcher.post("/teams", data)
	}

  fetchTeams () {
		return this.baseFetcher.get("/teams")
  }

	fetchTeam (id) {
		return this.baseFetcher.get(`/teams/${id}`)
	}

	fetchTeamMembers (id) {
		return this.baseFetcher.get(`/teams/${id}/members`)
	}

	fetchTeamProjects (id) {
		return this.baseFetcher.get(`/teams/${id}/projects`)
	}

	fetchTeamClients (id) {
		return this.baseFetcher.get(`/teams/${id}/clients`)
	}

	editTeam (id, data) {
		return this.baseFetcher.put(`/teams/${id}`, data)
	}

	deleteTeam (id) {
		console.log(id)
		return this.baseFetcher.delete(`/teams/${id}`)
	}
}

export const teamsApi = new TeamsAPI(baseFetcher);