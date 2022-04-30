export interface Warnings {
	data: string[];
	metadata: WarningsMetadata;
}

export interface WarningsMetadata {
	response_timestamp: Date;
	copyright: string;
}
