import { RegisterComponent } from './register/register.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  // when user hit home as a url will navigate to HomeComponent direct
  { path: "home", component: HomeComponent },
  { path: "statistics", component: ProductsTableComponent },
  { path: "register", component: RegisterComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  HomeComponent, ProductsTableComponent,RegisterComponent
];