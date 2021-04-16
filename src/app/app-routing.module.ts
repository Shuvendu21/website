import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutModule } from './about/about.module';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { NotfoundModule } from './notfound/notfound.module';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent, outlet: 'popup'  },
  { path: 'about', loadChildren: () => AboutModule },
  // { path: 'services', loadChildren: () => ServicesModule },
  // { path: 'testimonials', loadChildren: () => TestimonialModule },
  // { path: 'gallery', loadChildren: () => GalleryModule },
  // { path: 'clients', loadChildren: () => ClientsModule },
  // { path: 'pricing', loadChildren: () => PricingModule },
  // { path: 'subscribe', component: SubscribeComponent, outlet: 'popup' },
  // { path: 'dashboard', loadChildren: () => UserDashboardModule, canActivate: [RoutegaurdService]   },
  // { path: 'blog', loadChildren: () => BlogModule, canActivate: [RoutegaurdService] },
  { path: '404', loadChildren: () => NotfoundModule },
  { path: '**', redirectTo: '/404' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
