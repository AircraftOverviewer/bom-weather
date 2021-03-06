import type { ForecastIconIndicator } from './global';

export interface DailyForecast {
	metadata: DailyForecastMetadata;
	data: DailyForecastData[];
}

export interface DailyForecastMetadata {
	response_timestamp: Date;
	issue_time: Date;
	next_issue_time: Date;
	forecast_region: string;
	forecast_type: string;
	copyright: string;
}

export interface DailyForecastData {
	rain: DailyForecastDataRain;
	uv: DailyForecastDataUV;
	astronomical: DailyForecastDataAstronomical;
	now: DailyForecastDataNow;
	date: Date;
	temp_max: number;
	temp_min: number | null;
	extended_text: string;
	short_text: string;
	icon_descriptor: ForecastIconIndicator;
	fire_danger: string | null;
}

export interface DailyForecastDataRain {
	amount: DailyForecastDataRainAmount;
	chance: number;
	precipitation_amount_25_percent_chance: number;
	precipitation_amount_50_percent_chance: number;
	precipitation_amount_75_percent_chance: number;
}

export interface DailyForecastDataUV {
	start_time: Date | null;
	end_time: Date | null;
	category: string | null;
	max_index: number | null;
}

export interface DailyForecastDataRainAmount {
	min: number;
	max: number;
	lower_range: number;
	upper_range: number;
	units: string;
}

export interface DailyForecastDataAstronomical {
	sunrise_time: Date;
	sunset_time: Date;
}

export interface DailyForecastDataNow {
	is_night: boolean;
	now_label: string;
	later_label: string;
	temp_now: number;
	temp_later: number;
}
