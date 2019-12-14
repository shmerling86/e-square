import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { ToastrModule } from 'ngx-toastr';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromApp from './store/app.reducers';

import { BooksEffects } from './components/books/store/books.effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BooksComponent } from './components/books/books.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsComponent } from './components/details/details.component';
import { ItemDataComponent } from './components/item-data/item-data.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BooksComponent,
    WishListComponent,
    NavbarComponent,
    DetailsComponent,
    ItemDataComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(fromApp.appReducer),
    ReactiveFormsModule,
    EffectsModule.forRoot([BooksEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    MatDialogModule
  ],
  entryComponents: [DetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
