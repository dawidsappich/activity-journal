export interface IActivity {
	id: number,
	title: string,
	comments?: string,
	// date of recordung
	date: Date,
	// distance in kilometer
	distance?: number,
	// duraion in millisekonds
	duration?: number,
	// url to gpxdata in filesystem
	gpxData: string
}