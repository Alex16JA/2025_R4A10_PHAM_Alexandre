import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenererVoyageComponent } from './generer-voyage/generer-voyage.component';
import { DetailVoyageComponent } from './detail-voyage/detail-voyage.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full', 
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'generer',
    component: GenererVoyageComponent,
  },
  {
    path: 'detail/:id',
    component: DetailVoyageComponent,
  },
  {
    path: '**', 
    component: NotFoundComponent,
  },
];