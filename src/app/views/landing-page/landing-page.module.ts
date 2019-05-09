import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { LandingPageView } from './landing-page.view';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const ROUTES: Route[] = [
  { path: '', component: LandingPageView },
];

@NgModule({
  declarations: [
    LandingPageView,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [],
  providers: [],
})
export class LandingPageViewModule {}
