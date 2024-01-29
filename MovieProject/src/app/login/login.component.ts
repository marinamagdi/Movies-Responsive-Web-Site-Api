import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _auth:AuthService ,private _Router:Router) {
    
    
  }
 error:string='';
  isLoading:boolean=false; 
signinForm:FormGroup=new FormGroup({
 
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.required]),
 
     
});
SubmitSigninForm(signinForm:FormGroup) {
  this.isLoading=true;
 this._auth.signin(signinForm.value).subscribe({
 
  next:(response)=>{
    this.isLoading=false;
    
    if(response.message== "success"){
      localStorage.setItem('usertoken',response.token)
    this._auth.saveusertoken();
 this._Router.navigate(['/home'])
    }
else{
 
  this.error=response.message;
  
}
  }
 })
}
}
// submitRegisterForm(registerForm:FormGroup) {
//   this.isLoading=true;
//   // console.log(registerForm.get("displayName"))
//   // console.log(registerForm.value)
//  //registerForm.value deh eli htatb3at lldata fe services mkan elbody  object
//   this._auth.signup(registerForm.value).subscribe({
//     next:(response)=>{
//       this.isLoading=false;
//       if(response.message== "success"){
//         this._Router.navigate(['/login'])
//         //go automatic to login string path eli hrohlo 
//       }
//       else if(response.message!= "success"){
//         this.error=response.message;
       
//       }
//     }
//   });
// }