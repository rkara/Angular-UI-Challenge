import { Component } from '@angular/core';

enum Operator {
  Clear = 'C',
  Plus = '+',
  Minus = '-',
  Divide = '/',
  Multiply = '*',
  Equals = '=',
  None = '',
};

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  answer = 0;
  inputs = [];

  get inputStr() {
    let output = '';
    for (const input of this.inputs) {
      output += input;
    }
    return output;
  }

  input(inputStr: string) {
    if (inputStr === 'C') {
      this.inputs = [];
      this.calculate();
    } else if (inputStr === '=') {
      this.calculate();
    } else {
      const inputNum = parseInt(inputStr, 10);
      const previousInput = this.inputs.length > 0 ? this.inputs[this.inputs.length - 1] :
        undefined;
      const isPreviousInputNum = typeof (previousInput) !== 'undefined' && !isNaN(previousInput);
      if (!isNaN(inputNum)) {
        // Number
        if (isPreviousInputNum) {
          // Previous Input was a number, append this number to it
          this.inputs[this.inputs.length - 1] = parseInt(previousInput.toString() + inputNum, 10);
        } else {
          this.inputs.push(inputNum);
        }
      } else {
        // Operator
        const operator = inputStr as Operator;
        if (isPreviousInputNum) {
          this.inputs.push(operator);
        }
      }
    }
    this.calculate();
  }

  calculate() {
    let operator: Operator = Operator.None;
    let total = 0;
    const inputLength = this.inputs.length;
    for (let i = 0; i < inputLength; i++) {
      const input = this.inputs[i];
      if (typeof (input) === 'number') {
        switch (operator) {
          case Operator.Divide:
            total /= input;
            break;
          case Operator.Minus:
            total -= input;
            break;
          case Operator.Multiply:
            total *= input;
            break;
          case Operator.Plus:
          default:
            total += input;
            break;
        }
      } else {
        operator = input as Operator;
      }
    }

    this.answer = total;
  }
}
