import { Fetch } from '../utils/Fetch';
import type { DailyForecast, Observation, RainForecast, ThreeHourForecast, Warnings } from './structures';

/**
 * A static class with all BOM API endpoints
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BOM {
	/**
	 * Get the Observational Data of a geohash
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {Observation} An `Observation` object
	 */
	public static async getObservations(geohash: string): Promise<Observation> {
		try {
			return await Fetch.get<Observation>(`/locations/${geohash}/observations`);
		} catch {
			throw new Error('[BOMApiError] - An Invalid Geohash was provided');
		}
	}

	/**
	 * Get the Warnings Data of a geohash
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {Warnings} A `Warnings` object
	 */
	public static async getWarnings(geohash: string): Promise<Warnings> {
		try {
			return await Fetch.get<Warnings>(`/locations/${geohash}/warnings`);
		} catch {
			throw new Error('[BOMApiError] - An Invalid Geohash was provided');
		}
	}

	/**
	 * Get the Daily Forecast of a geohash
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {DailyForecast} A `DailyForecast` object
	 */
	public static async getDailyForecast(geohash: string): Promise<DailyForecast> {
		try {
			return await Fetch.get<DailyForecast>(`/locations/${geohash}/forecasts/daily`);
		} catch {
			throw new Error('[BOMApiError] - An Invalid Geohash was provided');
		}
	}

	/**
	 * Get the Three Hour Forecast of a geohash
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {ThreeHourForecast} A `ThreeHourForecast` object
	 */
	public static async getThreeHourForecast(geohash: string): Promise<ThreeHourForecast> {
		try {
			return await Fetch.get<ThreeHourForecast>(`/locations/${geohash}/forecasts/3-hourly`);
		} catch {
			throw new Error('[BOMApiError] - An Invalid Geohash was provided');
		}
	}

	/**
	 * Get the Rain Forecast of a geohash
	 * @param {string} geohash The geohash to use in the endpoint
	 * @returns {RainForecast} A `RainForecast` object
	 */
	public static async getRainForecast(geohash: string): Promise<RainForecast> {
		try {
			return await Fetch.get<RainForecast>(`/locations/${geohash}/forecast/rain`);
		} catch {
			throw new Error('[BOMApiError] - An Invalid Geohash was provided');
		}
	}
}
