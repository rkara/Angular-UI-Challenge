import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ApplicationIconView } from './application-icon.view';

const ROUTES: Route[] = [
  { path: '', component: ApplicationIconView },
];

@NgModule({
  declarations: [
    ApplicationIconView,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [],
  providers: [],
})
export class ApplicationIconViewModule {}
