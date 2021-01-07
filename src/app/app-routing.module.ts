import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ConstellationsComponent } from "./components/constellations/constellations.component";
import { ConstellationComponent } from './components/constellation/constellation.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'constellations', component: ConstellationsComponent},
  { path: 'constellation/:id', component: ConstellationComponent},
  { path: 'search/:value', component: SearchComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }