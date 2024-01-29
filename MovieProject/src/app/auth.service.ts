import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _Httpclient:HttpClient,private _router:Router) { 
    if(localStorage.getItem('usertoken')!=null){
      this.saveusertoken();
    }
  }
  UserData:any=new BehaviorSubject(null);
  saveusertoken(){
    let encodedToken=JSON.stringify (localStorage.getItem('usertoken'))
   let decodedToken:object= jwtDecode(encodedToken)
   this.UserData.next(decodedToken);
   console.log(this.UserData)
  }
  signout(){
    localStorage.removeItem('usertoken');
    this.UserData.next(null);
    this._router.navigate(['/login'])
  }
  signup(userdata:object):Observable<any>{
   return this._Httpclient.post('https://localhost:7094/api/Security/register',userdata)
  }
  signin(userdata:object):Observable<any>{
    return this._Httpclient.post('https://localhost:7094/api/Security/login',userdata)
   }
}
