import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {


@ViewChild('txtBuscar') txtbuscar!:ElementRef<HTMLInputElement>//non null assertion operator
  

constructor( private gifsService:GifsService){

}

  buscar(termino:string){
    const value = this.txtbuscar.nativeElement.value;
    if( value.trim().length == 0){
      return
    }
    // console.log(value);
    this.gifsService.buscarGifs(value.trim());
    this.txtbuscar.nativeElement.value = '';
  }

}
