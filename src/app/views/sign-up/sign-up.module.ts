import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { SignupView } from './sign-up.view';

const ROUTES: Route[] = [
  { path: '', component: SignupView },
];

@NgModule({
  declarations: [
    SignupView,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [],
  providers: [],
})
export class SignupViewModule {}
