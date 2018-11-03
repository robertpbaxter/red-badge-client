import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { MaterialModule } from "./materialmodule";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MapComponent } from "./map/map.component";
import { AgmCoreModule } from "@agm/core";
import { MapEntryComponent } from "./map-entry/map-entry.component";
import { NewHousingComponent } from "./new-housing/new-housing.component";
import { AuthGuard } from "./auth.guard";
import { TicketsComponent } from "./tickets/tickets.component";
import { UserComponent } from "./user/user.component";
import { MatIconModule } from "@angular/material/icon";
import { MapDetailsComponent } from "./map-details/map-details.component";
import { HousingDetailComponent } from "./housing-detail/housing-detail.component";
import { UpdateHousingComponent } from "./update-housing/update-housing.component";
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AuthComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    MapComponent,
    MapEntryComponent,
    NewHousingComponent,
    TicketsComponent,
    UserComponent,
    MapDetailsComponent,
    HousingDetailComponent,
    UpdateHousingComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBjo_g0gV5qXLS1ASDwVNCqvh0M9_IrZsM",
      libraries: ["places"]
    }),
    MatIconModule
  ],
  entryComponents: [UpdateHousingComponent],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
