import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {
@ViewChild('txtBuscar') txtbuscar!:ElementRef<HTMLInputElement>//non null assertion operator
  


  buscar(termino:string){

    const value = this.txtbuscar.nativeElement.value;
    console.log(value);
    this.txtbuscar.nativeElement.value = '';
  }

}
