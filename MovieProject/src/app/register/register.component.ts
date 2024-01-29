import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private _auth:AuthService ,private _Router:Router) {
    
    
  }
 error:string='';
  isLoading:boolean=false; 
  //ayza a3mal form w deh controllers gwha
registerForm:FormGroup=new FormGroup({
  displayName:new FormControl(null,[Validators.minLength(5),Validators.maxLength(100),Validators.required]),
  email:new FormControl(null,[Validators.email,Validators.required]),
  phoneNumber:new FormControl(null,[Validators.pattern(/^[0-2]/),Validators.required ]),
  password:new FormControl(null,[Validators.required]),
 
    
     
});
submitRegisterForm(registerForm:FormGroup) {
  this.isLoading=true;
  // console.log(registerForm.get("displayName"))
 console.log(registerForm.value)
 //registerForm.value deh eli htatb3at lldata fe services mkan elbody  object
  this._auth.signup(registerForm.value).subscribe({
    next:(response)=>{
      this.isLoading=false;
      if(response.message== "success"){
        this._Router.navigate(['/login'])
        //go automatic to login string path eli hrohlo 
      }
      else if(response.message!= "success"){
        this.error=response.message;
       
      }
    }
  });
}
// SubmitRegisterForm(registerForm:FormGroup) {
//   this.isLoading=true;
//  this._auth.signup(registerForm.value).subscribe({
 
//   next:(response)=>{
//     this.isLoading=false;
//     if(response.message==="success"){
//  this._Router.navigate(['/login'])
//     }
// else{
 
//  this.error=response.errors
// }
//   }
//  })
// }
}
