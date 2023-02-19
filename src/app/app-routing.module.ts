import { AboutComponent } from './components/about/about.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { SportsComponent } from './components/sports/sports.component';
import { ScienceComponent } from './components/science/science.component';
import { HealthComponent } from './components/health/health.component';
import { GeneralComponent } from './components/general/general.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { BusinessComponent } from './components/business/business.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'health', component: HealthComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
