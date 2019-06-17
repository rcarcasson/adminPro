import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso = 50;
  @Input() leyenda = 'Leyenda';
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor) {
    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );
  }

  onChanges( newValue: number ) {

    // const elementHTML: any = document.getElementsByName('progreso')[0];


    console.log(newValue);
    if (newValue >= 100) {
      this.progreso = 100;
    } else if ( newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elementHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();

  }

}
