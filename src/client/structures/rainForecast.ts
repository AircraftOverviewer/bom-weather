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
