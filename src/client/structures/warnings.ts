export interface Warnings {
	metadata: WarningsMetadata;
	data: WarningsData[];
}

export interface WarningsMetadata {
	response_timestamp: Date;
	copyright: string;
}

export interface WarningsData {
	id: string;
	type: string;
	title: string;
	short_title: string;
	state: string;
	warning_group_type: string;
	issue_time: Date;
	expiry_time: Date;
	phase: string;
}
