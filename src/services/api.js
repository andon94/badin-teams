import fetcher from 'axios'

class BaseFetcher {
	constructor (fetcher, options = {}) {
		if(!fetcher) {
			throw new Error('Please add fetcher!')
		}
		this.fetcher = fetcher.create(options);

		if (localStorage.token) {
			this.fetcher.interceptors.request.use(
				(config) => {
					const token = JSON.parse(localStorage.token) || null
					if (token) {
						config.headers.authorization = token
					}
					return config
				},
				(error) => {
					return Promise.reject(error)
				}
			)
		}
	}

	post(...options) {
		return this.fetcher.post(...options).then(res => res.data);
	}

	get (...options) {
		return this.fetcher.get(...options).then(res => res.data);
	}

	put (...options) {
		return this.fetcher.put(...options).then(res => res.data);
	}

	delete (...options) {
		return this.fetcher.delete(...options).then(res => res.data);
	}
}

export const baseFetcher = new BaseFetcher(fetcher, {baseURL: process.env.VUE_APP_API_BASE_URL})

