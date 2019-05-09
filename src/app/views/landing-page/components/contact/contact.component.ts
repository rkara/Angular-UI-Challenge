import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ContactContract {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'my-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Output()
  contact = new EventEmitter<ContactContract>();

  model: ContactContract = {
    name: '',
    email: '',
    message: '',
  };

  _onContact() {
    this.contact.emit(this.model);
  }
}
