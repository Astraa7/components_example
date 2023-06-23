import { Component } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  display: string = '';
  lastButtonClicked: string = '';

  appendToDisplay(value: string) {
    if (this.isOperator(value)) {
      if (this.isOperator(this.lastButtonClicked)) {
        // Si el último botón y el valor actual son operadores, se actualiza el último operador
        this.display = this.display.slice(0, -1) + value;
      } else {
        // Agregar el operador al final de la cadena
        this.display += value;
      }
    } else {
      this.display += value;
    }

    this.lastButtonClicked = value;
  }

  isOperator(value: string): boolean {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(value);
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }

  clear() {
    this.display = '';
    this.lastButtonClicked = '';
  }
}
