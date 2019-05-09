import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { CheckoutView } from './checkout.view';

const ROUTES: Route[] = [
  { path: '', component: CheckoutView },
];

@NgModule({
  declarations: [
    CheckoutView,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [],
  providers: [],
})
export class CheckoutViewModule {}
