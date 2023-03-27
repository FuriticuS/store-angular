import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'catalog', component: CatalogComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule{

}
