import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JourneysComponent } from './journeys/journeys.component';
import { StationsComponent } from './stations/stations.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'journeys', component: JourneysComponent },
  { path: 'stations', component: StationsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}