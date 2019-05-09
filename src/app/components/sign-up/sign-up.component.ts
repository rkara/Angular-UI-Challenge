import { Component } from '@angular/core';

export interface SignUpContract {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [ './sign-up.component.scss' ]
})
export class SignUpComponent  {
  isLogin = false;

  model: SignUpContract = {
    name: '',
    email: '',
    password: '',
  };

  signIn() {

  }

  signUp() {
    
  }
}
