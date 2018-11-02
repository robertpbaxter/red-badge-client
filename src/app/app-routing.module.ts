import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthComponent } from "./auth/auth.component";
import { AboutComponent } from "./about/about.component";
import { AuthGuard } from "./auth.guard";
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewHousingComponent } from "./new-housing/new-housing.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { HousingDetailComponent } from "./housing-detail/housing-detail.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "contact", component: ContactComponent, canActivate: [AuthGuard] },
  { path: "auth", component: AuthComponent },
  { path: "signup", component: SignupComponent },
  { path: "about", component: AboutComponent, canActivate: [AuthGuard] },
  { path: "tickets", component: TicketsComponent, canActivate: [AuthGuard] },
  { path: "new", component: NewHousingComponent, canActivate: [AuthGuard] },
  {
    path: "detail/:id",
    component: HousingDetailComponent,
    canActivate: [AuthGuard]
  }
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
