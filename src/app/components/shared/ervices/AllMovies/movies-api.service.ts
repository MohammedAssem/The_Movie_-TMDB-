import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { serviceURL } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesAPIService {

  constructor(private _HttpClient:HttpClient) {

   }

   getDataAllMov():Observable<any>
   {
    return this._HttpClient.get(serviceURL.Movies.all)
   }
   showMovie(id:any,type:any):Observable<any>{
     return this._HttpClient.get("https://api.themoviedb.org/3/"+type+"/"+id+"?api_key=676319826011238b4a526f3692c92d57&language=en-US")
   }
   getmoves(type:any):Observable<any>{
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/"+type+"/day?api_key=676319826011238b4a526f3692c92d57")
   }

}
