import { AboutUsComponent } from './components/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PricingPlansComponent } from './components/pricing-plans/pricing-plans.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'about' , component: AboutUsComponent },
  { path: 'contact' , component: ContactUsComponent },
  { path: 'pricing' , component: PricingPlansComponent },
  { path: 'work' , component: HowItWorksComponent },
  { path: '**' , component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
