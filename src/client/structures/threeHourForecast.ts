import type { ForecastIconIndicator } from './global';

export interface ThreeHourForecast {
	metadata: ThreeHourForecastMetadata;
	data: ThreeHourForecastData[];
}

export interface ThreeHourForecastMetadata {
	issue_time: Date;
	response_time: Date;
	copyright: string;
}

export interface ThreeHourForecastData {
	rain: ThreeHourForecastDataRain;
	wind: ThreeHourForecastDataWind;
	temp: number;
	icon_descriptor: ForecastIconIndicator;
	time: Date;
	is_night: boolean;
	next_forecast_period: Date;
}

export interface ThreeHourForecastDataRain {
	amount: ThreeHourForecastDataRainAmount;
	chance: number;
}

export interface ThreeHourForecastDataWind {
	speed_kilometre: number;
	speed_knot: number;
	direction: string;
}

export interface ThreeHourForecastDataRainAmount {
	min: number;
	max: number | null;
	units: string;
}
