import { HttpClient, HttpParams, JsonpInterceptor  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFEngine,Gif } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private  apikey     : string   = 'O7TUfablHA8hnDr1Pts7QOF8p48061yE';

  private servicioUrl : string   = 'https://api.giphy.com/v1/gifs'

  private  _historial : string[] = [];

  public   resultado  : Gif[]    = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!)  || [];
    this.resultado  = JSON.parse(localStorage.getItem('resultados')!) || [];
    


  }

  buscarGifs(query:string){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){

      this._historial.unshift( query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));


    }

    const params = new HttpParams()
    .set('api_key',this.apikey)
    .set('limit','10')
    .set('q',query);

    console.log(params.toString());

    console.log(this._historial);

    this.http.get<SearchGIFEngine>(`${this.servicioUrl}/search`,{ params })
    .subscribe( resp =>{
      console.log(resp.data );
      this.resultado = resp.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultado));

      

    })
  }



}
