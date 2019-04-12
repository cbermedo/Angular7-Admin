import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

@ViewChild('txtProgress') txtProgress: ElementRef;

// tslint:disable-next-line: no-input-rename
  @Input('nombrex') leyenda: string = 'leyenda';
  @Input('dummy') dummy: string = 'test';
  @Input() progreso: number = 50;

// tslint:disable-next-line: no-output-rename
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges( newValue: number ) {

    // let elemHTML: any = document.getElementsByName('progreso')[0];

    if (newValue > 100) {
      this.progreso = 100;
    } else if ( newValue < 0){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHTML.value = this.progreso;


    this.txtProgress.nativeElement.value = this.progreso;
    // setear el valor a este elemento en especifico, cuando hay mas de un componente igual en el padre (viewChild)

    this.cambioValor.emit( this.progreso );
    // EventEmiter

    this.txtProgress.nativeElement.focus();
    // Darle el foco al elemento
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);
  }

}
