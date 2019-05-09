import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { UserProfileView } from './user-profile.view';

const ROUTES: Route[] = [
  { path: '', component: UserProfileView },
];

@NgModule({
  declarations: [
    UserProfileView,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [],
  providers: [],
})
export class UserProfileViewModule {}
