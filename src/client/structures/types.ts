export interface Observation {
	data: ObservationData;
	metadata: ObservationMetadata;
}

export interface ObservationMetadata {
	response_timestamp: Date;
	issue_time: Date;
	observation_time: Date;
	copyright: string;
}

export interface ObservationData {
	temp: number;
	temp_feels_like: number;
	wind: ObservationDataWind;
	gust: ObservationDataGust;
	rain_since_9am: number;
	humidity: number;
	station: ObservationDataStation;
}

export interface ObservationDataWind {
	speed_kilometre: number;
	speed_knot: number;
	direction: string;
}

export interface ObservationDataGust {
	speed_kilometre: number;
	speed_knot: number;
}

export interface ObservationDataStation {
	bom_id: string;
	name: string;
	distance: number;
}

export interface Warnings {
	data: string[];
	metadata: WarningsMetadata;
}

export interface WarningsMetadata {
	response_timestamp: Date;
	copyright: string;
}

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
	temp_min?: number;
	extended_text: string;
	short_text: string;
	icon_descriptor: string;
	fire_danger: string;
}

export interface DailyForecastDataRain {
	amount: DailyForecastDataRainAmount;
	chance: number;
	precipitation_amount_25_percent_chance: number;
	precipitation_amount_50_percent_chance: number;
	precipitation_amount_75_percent_chance: number;
}

export interface DailyForecastDataUV {
	category: null;
	end_time: null;
	max_index: null;
	start_time: null;
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
	icon_descriptor: string;
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
	max?: number;
	units: string;
}

export interface RainForecast {
	metadata: RainForecastMetadata;
	data: RainForecastData;
}

export interface RainForecastMetadata {
	response_timestamp: Date;
	copyright: string;
}

export interface RainForecastData {
	amount?: number;
	chance?: number;
	start_time?: Date;
	period: string;
}
