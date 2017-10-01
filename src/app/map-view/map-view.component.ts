import { IActivity } from './../shared/activity.model';
import { MapService } from './../services/map.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  activity: any;

  constructor(private _mapService: MapService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.activity = this._mapService.getActivity(this._route.snapshot.params['id']);
  }

  ngAfterViewInit() {
    this._mapService.plotActivity(this._route.snapshot.params['id']);
  }

}
