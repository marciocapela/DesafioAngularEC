import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/share/header/header.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { NavComponent } from './components/share/nav/nav.component';
import { BookstoreAppComponent } from './components/share/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './components/share/bookstore-app/filters/filters.component';
import { ProductListComponent } from './components/share/bookstore-app/product-list/product-list.component';
import { ProductItemComponent } from './components/share/bookstore-app/product-list/product-item/product-item.component';
import { BooksService } from './components/share/bookstore-app/product-list/product-list.component.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
