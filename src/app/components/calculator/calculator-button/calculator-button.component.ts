import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.scss']
})
export class CalculatorButtonComponent {
  @Input()
  displayChar = '';

  @Input()
  operator = false;

  @Input()
  equals = false;

  @Output()
  buttonClick = new EventEmitter<string>();

  onClick() {
    this.buttonClick.emit(this.displayChar);
  }
}
