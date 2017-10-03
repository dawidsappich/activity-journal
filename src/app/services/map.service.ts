import { SAVED_ACTIVITIES } from './../shared/activities';
import { ActivityService } from './activity.service';
import { environment } from './../../environments/environment';
import { IActivity } from './../shared/activity.model';
import { Injectable } from '@angular/core';

var accessToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;

@Injectable()
export class MapService {

  defaultCoords: number[] = [51.0, 0.09];
  defaultZoom: number = 13;

  constructor() { }

  getActivity(activityId: number) {
    return SAVED_ACTIVITIES.slice(0).find(run => run.id == activityId);
  }

  plotActivity(id: number) {

    let activities = SAVED_ACTIVITIES.slice(0);

    var myStyles = {
      "color": "#3949AB",
      "weight": 5,
      "opacity": 0.95
    }

    let mymap = L.map('mapid').setView(this.defaultCoords, this.defaultZoom);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.run-bike-hike',
      accessToken: accessToken
    }).addTo(mymap);

    var customLayer = L.geoJson(null, { style: myStyles });

    var gpxLayer = omnivore.gpx(activities.find(activity => activity.id == id).gpxData, null, customLayer)
      .on('ready', function () {
        mymap.fitBounds(gpxLayer.getBounds());
      }).addTo(mymap);

  }

}
