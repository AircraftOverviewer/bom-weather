export interface Warnings {
	data: unknown[]; // Unknown Type - No docs
	metadata: WarningsMetadata;
}

export interface WarningsMetadata {
	response_timestamp: Date;
	copyright: string;
}
