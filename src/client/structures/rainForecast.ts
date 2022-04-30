export interface RainForecast {
	metadata: RainForecastMetadata;
	data: RainForecastData;
}

export interface RainForecastMetadata {
	response_timestamp: Date;
	copyright: string;
}

export interface RainForecastData {
	amount: number | null;
	chance: number | null;
	start_time: Date | null;
	period: string;
}
