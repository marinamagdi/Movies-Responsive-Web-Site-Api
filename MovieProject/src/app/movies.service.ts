import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
imageurl:string='https://image.tmdb.org/t/p/w500'
  constructor(private http:HttpClient) { }
  gettrending(mediatype:string):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=`)
  }
 
getitemdetails(id:any,media_type:any):Observable<any>
{
  return this.http.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=`)
  
}
getsmilar(id:any,media_type:any):Observable<any>{
  return this.http.get(`https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=`)
}

}
