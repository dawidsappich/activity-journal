export interface IActivity {
	id: number,
	title: string,
	comments?: string,
	// date of recordung
	date: Date,
	// type of activity e.g. MTB (mountainbike), RUN etc.
	type: string,
	// distance in kilometer
	distance?: number,
	// duraion in millisekonds
	duration?: number,
	// url to gpxdata in filesystem
	gpxData: string
}