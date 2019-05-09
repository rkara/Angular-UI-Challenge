import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { HomeView } from './home.view';

const ROUTES: Route[] = [
  { path: '', component: HomeView },
];

@NgModule({
  declarations: [
    HomeView,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [],
  providers: [],
})
export class HomeViewModule {}
