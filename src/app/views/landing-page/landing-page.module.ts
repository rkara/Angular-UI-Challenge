import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { LandingPageView } from './landing-page.view';

const ROUTES: Route[] = [
  { path: '', component: LandingPageView },
];

@NgModule({
  declarations: [
    LandingPageView,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [],
  providers: [],
})
export class LandingPageViewModule {}
