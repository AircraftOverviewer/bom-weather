import { fetch, RequestInit } from 'undici';

/* eslint-disable @typescript-eslint/no-extraneous-class */
export class Fetch {
	private static rootAPI = 'https://api.weather.bom.gov.au/v1';

	public static get<type>(route: string, options?: RequestInit): Promise<type> {
		return new Promise((resolve, reject) => {
			fetch(`${this.rootAPI}${route}`, {
				...options
			})
				.then((res) => res.json())
				.then((res) => resolve(res as type))
				.catch((err) => reject(err));
		});
	}
}
