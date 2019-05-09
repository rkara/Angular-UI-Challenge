import { Component } from '@angular/core';

export interface PaymentContract {
  name: string;
  cardNumber: string;
  cvc: string;
  expirationDate: string;
  zipCode: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  model: PaymentContract = {
    name: '',
    cardNumber: '',
    cvc: '',
    expirationDate: '',
    zipCode: '',
  };

  itemName = 'iPhone Xs Max';
  itemPrice =  1099.99;
  itemImg = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-max-space-select-2018?wid=470&hei=556&fmt=png-alpha&.v=1550795409906';

  checkout() {

  }
}
