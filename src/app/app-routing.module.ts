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

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "contact", component: ContactComponent },
  { path: "auth", component: AuthComponent },
  { path: "about", component: AboutComponent },
  { path: "tickets", component: TicketsComponent },
  // { path: '**', component: PageNotFoundComponent}

  { path: "new", component: NewHousingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
