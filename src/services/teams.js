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
}

export const teamsApi = new TeamsAPI(baseFetcher);