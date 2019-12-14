import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { BooksComponent } from './components/books/books.component';
import { WishListComponent } from './components/wish-list/wish-list.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'bookShelf', component: BooksComponent },
  { path: 'wishList', component: WishListComponent },
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
