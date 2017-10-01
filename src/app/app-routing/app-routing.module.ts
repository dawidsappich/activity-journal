import { MapViewComponent } from './../map-view/map-view.component';
import { ActivityListComponent } from './../activity-list/activity-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'activities',
    component: ActivityListComponent
  },
  {
    path: 'activities/:id',
    component: MapViewComponent
  },
  {
    path: '**',
    redirectTo: 'activities',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
