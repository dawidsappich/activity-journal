import { AppRoutingModule } from './app-routing/app-routing.module';
import { ActivityService } from './services/activity.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapViewComponent } from './map-view/map-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
