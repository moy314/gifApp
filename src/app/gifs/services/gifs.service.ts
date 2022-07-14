import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private  gifApi               = 'O7TUfablHA8hnDr1Pts7QOF8p48061yE';

  private  _historial:string[]  = [];

  public   resultado:any[]      = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient){


  }

  buscarGifs(query:string){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){

      this._historial.unshift( query);
    }
    this._historial = this._historial.splice(0,10);

    console.log(this._historial);

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=O7TUfablHA8hnDr1Pts7QOF8p48061yE&q=${query}&limit=10`)
    .subscribe( (resp:any) =>{
      console.log(resp.data);
      this.resultado = resp.data;

    })
  }



}
