import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
	{
		id: 1,
		title: 'Mountainbike Italien Tag 1',
		comments: 'Leichte Tour zum reinkommen',
		date: new Date('11/09/2017'),
		distance: 17.0,
		duration: 5112000,
		gpxData: '../assets/gpx/Tag_1_Italien_part_2.gpx'
	},
	{
		id: 2,
		title: 'Mountainbike Italien Tag 2',
		comments: 'Schwere Bergtour',
		date: new Date('12/09/2017'),
		distance: 38.7,
		duration: 19476000,
		gpxData: '../assets/gpx/Tag_2_Italien.gpx'
	},
	{
		id: 3,
		title: 'Mountainbike Italien Tag 3',
		comments: 'Kleine Bergtour',
		date: new Date('13/09/2017'),
		distance: 27.3,
		duration: 15156000,
		gpxData: '../assets/gpx/Tag_3_Italien.gpx'
	},
	{
		id: 4,
		title: 'Mountainbike Italien Tag 3',
		comments: 'Kleine Bergtour mit schöner Abfahrt',
		date: new Date('14/09/2017'),
		distance: 28.5,
		duration: 19080000,
		gpxData: '../assets/gpx/Tag_4_Italien.gpx'
	}
]