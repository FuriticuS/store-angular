import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import { MainComponent } from './components/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductListComponent } from './components/product-list/product-list.component';
import {AppRoutingModule} from "./app-routing.module";
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProductListComponent,
    ContactsComponent,
    AboutComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
