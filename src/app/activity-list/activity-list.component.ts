import { IActivity } from './../shared/activity.model';
import { ActivityService } from './../services/activity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: IActivity[];
  totalActivities: number;
  totalDistance: number; // in km
  totalDuration: number; // in ms

  constructor(private _activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this._activityService.getActivities();
    this.totalActivities = this._activityService.getTotalActivities(this.activities);
    this.totalDistance = this._activityService.getTotalDistance(this.activities);
    this.totalDuration = this._activityService.getTotalDuration(this.activities);
  }

}
