import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: "app-promesas",
  templateUrl: "./promesas.component.html",
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    
    this.cuentaTres().then((message) => {
      console.log('Termino', message);
    })
    .catch((error) => {
      console.error('Error en la promesa', error);
    });
  }

  ngOnInit() {}

cuentaTres(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    let contador = 0;
    const intervalo = setInterval(() => {
      contador++;
      console.log(contador);
      if (contador === 3) {
        resolve(true);
        // reject('simplemente un error!');
        clearInterval(intervalo);
      }
    }, 1000);
  });
}

}
