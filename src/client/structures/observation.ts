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
	temp_feels_like: number | null;
	wind: ObservationDataWind | null;
	gust: ObservationDataGust | null;
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
