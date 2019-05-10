import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { CalculatorView } from './calculator.view';

const ROUTES: Route[] = [
  { path: '', component: CalculatorView },
];

@NgModule({
  declarations: [
    CalculatorView,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [],
  providers: [],
})
export class CalculatorViewModule {}
