import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenererVoyageComponent } from './generer-voyage/generer-voyage.component';
import { DetailVoyageComponent } from './detail-voyage/detail-voyage.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        component: HomeComponent, path: ''
    },
    {
        component: GenererVoyageComponent, path: 'generer'
    },
    {
        component: DetailVoyageComponent, path: 'detail'
    },
    {
        component: NotFoundComponent, path: 'erreur404'
    }
];
