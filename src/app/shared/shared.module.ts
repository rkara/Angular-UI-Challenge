import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { CalculatorComponent } from '../components/calculator/calculator.component';
import { CalculatorButtonComponent } from '../components/calculator/calculator-button/calculator-button.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { LogoComponent } from '../components/logo/logo.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    CalculatorComponent,
    CalculatorButtonComponent,
    CheckoutComponent,
    LogoComponent,
    SignUpComponent,
    UserProfileComponent,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CalculatorComponent,
    CalculatorButtonComponent,
    CheckoutComponent,
    LogoComponent,
    SignUpComponent,
    UserProfileComponent,
  ],
})
export class SharedModule { }
