import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from "./contact/contact.component";
import { AuthComponent } from "./auth/auth.component";
import { AboutComponent } from "./about/about.component";
import { NewHousingComponent } from './new-housing/new-housing.component';


const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "contact", component: ContactComponent},
  {path: "auth", component: AuthComponent},
  {path: "about", component: AboutComponent},
  {path: "new", component: NewHousingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
