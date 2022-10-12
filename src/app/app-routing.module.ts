import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { SumarComponent } from './components/product/sumar/sumar.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "calculadora",
    component: SumarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
