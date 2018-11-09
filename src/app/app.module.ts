import { AgmCoreModule } from "@agm/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { AboutComponent } from "./about/about.component";
import { SupportFormComponent } from "./support-form/support-form.component";
import { MaterialModule } from "./materialmodule";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { MapComponent } from "./map/map.component";
import { MapEntryComponent } from "./map-entry/map-entry.component";
import { HousingComponent } from "./housing/housing.component";
import { AuthGuard } from "./auth.guard";
import { TicketsComponent } from "./tickets/tickets.component";
import { UserComponent } from "./user/user.component";
import { MapDetailsComponent } from "./map-details/map-details.component";
import { HousingDetailComponent } from "./housing-detail/housing-detail.component";
import { UpdateHousingComponent } from "./update-housing/update-housing.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { DeleteAccountComponent } from "./delete-account/delete-account.component";
import { InboxComponent } from "./inbox/inbox.component";
import { SendMessageComponent } from "./send-message/send-message.component";
import { ReportComponent } from "./report/report.component";
import { ReportedHousingComponent } from "./reported-housing/reported-housing.component";
import { ReportedMessageComponent } from "./reported-message/reported-message.component";
import { FooterComponent } from "./footer/footer.component";
import { MiniMapComponent } from "./mini-map/mini-map.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AuthComponent,
    AboutComponent,
    SupportFormComponent,
    LoginComponent,
    SignupComponent,
    MapComponent,
    MapEntryComponent,
    HousingComponent,
    TicketsComponent,
    UserComponent,
    MapDetailsComponent,
    HousingDetailComponent,
    UpdateHousingComponent,
    UserSettingsComponent,
    DeleteAccountComponent,
    InboxComponent,
    SendMessageComponent,
    ReportComponent,
    ReportedHousingComponent,
    ReportedMessageComponent,
    FooterComponent,
    MiniMapComponent
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
  entryComponents: [
    UpdateHousingComponent,
    DeleteAccountComponent,
    SendMessageComponent,
    ReportComponent
  ],
  providers: [AuthGuard, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
