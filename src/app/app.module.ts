import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { SignupComponent } from './signup/signup.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { NotfoundModule } from './notfound/notfound.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    NavmenuComponent,
    SignupComponent,
    SocialComponent,
    FooterComponent,
    ContactusComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    // HttpClientModule,
    HomeModule,
    AboutModule,
    // ServicesModule,
    // GalleryModule,
    // UserDashboardModule,
    NotfoundModule,
    // ClientsModule,
    // TestimonialModule,
    // PricingModule,
    // BlogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
