import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SupportFormComponent } from "./support-form/support-form.component";
import { AuthComponent } from "./auth/auth.component";
import { AboutComponent } from "./about/about.component";
import { AuthGuard } from "./auth.guard";
import { HousingComponent } from "./housing/housing.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { HousingDetailComponent } from "./housing-detail/housing-detail.component";
import { SignupComponent } from "./signup/signup.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { InboxComponent } from "./inbox/inbox.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: "support",
    component: SupportFormComponent,
    canActivate: [AuthGuard]
  },
  { path: "auth", component: AuthComponent },
  { path: "signup", component: SignupComponent },
  { path: "about", component: AboutComponent, canActivate: [AuthGuard] },
  { path: "tickets", component: TicketsComponent, canActivate: [AuthGuard] },
  { path: "housing", component: HousingComponent, canActivate: [AuthGuard] },
  { path: "inbox", component: InboxComponent, canActivate: [AuthGuard] },
  {
    path: "account",
    component: UserSettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "detail/:id",
    component: HousingDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
