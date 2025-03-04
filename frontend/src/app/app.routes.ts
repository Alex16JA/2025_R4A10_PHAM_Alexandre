import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { SingleBookPageComponent } from './pages/single-book-page/single-book-page.component';
import { CreateBookPageComponent } from './pages/create-book-page/create-book-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: BookListPageComponent },
  { path: 'book/create', component: CreateBookPageComponent },
  { path: 'book/:id', component: SingleBookPageComponent },
];
