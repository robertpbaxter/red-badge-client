import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import {MatMenuModule} from '@angular/material/menu';

// import {MatButtonModule, MatCheckboxModule, MatMenu} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AuthComponent,
    AboutComponent,
    ContactComponent,
    // MatMenuModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
