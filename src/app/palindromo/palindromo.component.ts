import { Component } from '@angular/core';

@Component({
  selector: 'palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
  palabra: string = '';
  esPalindromo: boolean = false;

  verificarPalindromo(palabra: string) {
    const palabraSinEspacios = palabra.toLowerCase().replace(/\s/g, '');
    const longitud = palabraSinEspacios.length;

    for (let i = 0; i < longitud / 2; i++) {
      if (palabraSinEspacios[i] !== palabraSinEspacios[longitud - 1 - i]) {
        this.esPalindromo = false;
        return;
      }
    }

    this.esPalindromo = true;
  }
}
