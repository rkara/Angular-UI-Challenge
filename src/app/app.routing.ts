import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './views/home/home.module#HomeViewModule' },
  { path: 'sign-up', loadChildren: './views/sign-up/sign-up.module#SignupViewModule' },
  { path: 'checkout', loadChildren: './views/checkout/checkout.module#CheckoutViewModule' },
  { path: 'calculator', loadChildren: './views/calculator/calculator.module#CalculatorViewModule' },
  { path: 'landing-page', loadChildren: './views/landing-page/landing-page.module#LandingPageViewModule' },
  { path: 'application-icon', loadChildren: './views/application-icon/application-icon.module#ApplicationIconViewModule' },
  { path: 'user-profile', loadChildren: './views/user-profile/user-profile.module#UserProfileViewModule' },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
