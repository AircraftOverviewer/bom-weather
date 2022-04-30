import fetch from 'axios';
import type { DailyForecast, Observation, RainForecast, ThreeHourForecast, Warnings } from './structures';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BOM {
	/**
	 *
	 * Get the Observational Data of a geohash
	 * @public @static @param {string} geohash The geohash to collect data from
	 * @returns {Observation} An `Observation` object
	 */
	public static async getObservations(geohash: string): Promise<Observation> {
		try {
			return (await fetch(`https://api.weather.bom.gov.au/v1/locations/${geohash}/observations`)).data as Observation;
		} catch {
			throw new Error('[BOMApiError] - An Invalid Geohash was provided');
		}
	}

	/**
	 * Get the Warnings Data of a geohash
	 * @public @static @param {string} geohash The geohash to collect data from
	 * @returns {Warnings} A `Warnings` object
	 */
	public static async getWarnings(geohash: string): Promise<Warnings> {
		try {
			return (await fetch(`https://api.weather.bom.gov.au/v1/locations/${geohash}/warnings`)).data as Warnings;
		} catch {
			throw new Error('[BOMApiError] - An Invalid Geohash was provided');
		}
	}

	/**
	 * Get the Daily Forecast of a geohash
	 * @public @static @param {string} geohash The geohash to collect data from
	 * @returns {DailyForecast} A `DailyForecast` object
	 */
	public static async getDailyForecast(geohash: string): Promise<DailyForecast> {
		try {
			return (await fetch(`https://api.weather.bom.gov.au/v1/locations/${geohash}/forecasts/daily`)).data as DailyForecast;
		} catch {
			throw new Error('[BOMApiError] - An Invalid Geohash was provided');
		}
	}

	/**
	 * Get the Three Hour Forecast of a geohash
	 * @public @static @param {string} geohash The geohash to collect data from
	 * @returns {ThreeHourForecast} A `ThreeHourForecast` object
	 */
	public static async getThreeHourForecast(geohash: string): Promise<ThreeHourForecast> {
		try {
			return (await fetch(`https://api.weather.bom.gov.au/v1/locations/${geohash}/forecasts/3-hourly`)).data as ThreeHourForecast;
		} catch {
			throw new Error('[BOMApiError] - An Invalid Geohash was provided');
		}
	}

	/**
	 * Get the Rain Forecast of a geohash
	 * @public @static @param {string} geohash The geohash to collect data from
	 * @returns {RainForecast} A `RainForecast` object
	 */
	public static async getRainForecast(geohash: string): Promise<RainForecast> {
		try {
			return (await fetch(`https://api.weather.bom.gov.au/v1/locations/${geohash}/forecast/rain`)).data as RainForecast;
		} catch {
			throw new Error('[BOMApiError] - An Invalid Geohash was provided');
		}
	}
}
