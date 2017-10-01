import { IActivity } from './../shared/activity.model';
import { SAVED_ACTIVITIES } from './../shared/activities';
import { Injectable } from '@angular/core';

@Injectable()
export class ActivityService {

  constructor() { }

  getActivities(): IActivity[] {
    return SAVED_ACTIVITIES.splice(0);
  }

  getTotalActivities(activities: IActivity[]) {
    return activities.length;
  }

  getTotalDistance(activities: IActivity[]) {
    let totalDistance = 0;
    activities.forEach(element => {
      totalDistance += element.distance;
    });
    return totalDistance;
  }

  getTotalDuration(activities: IActivity[]) {
    let totalDuration = 0;
    activities.forEach(element => {
      totalDuration += element.duration;
    })
    return totalDuration;
  }

}
