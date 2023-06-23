import { Component } from '@angular/core';

@Component({
  selector: 'potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaComponent {
  resultado: number | null = null;

  calcularPotencia(base: string, exponente: string) {
    const baseValue = Number(base);
    const exponenteValue = Number(exponente);
    this.resultado = Math.pow(baseValue, exponenteValue);
  }
}
