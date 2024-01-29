import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
/**
 *
 */
islogin:boolean=false;
constructor(private AuthService:AuthService) {}
ngOnInit():void{
  this.AuthService.UserData.subscribe({
    next:()=>{
      if( this.AuthService.UserData.getValue()!=null){
        this.islogin=true;
      }
      else{
        this.islogin=false;
      }
    }
  })
   
  
  
  
}
signout(){
  this.AuthService.signout();
}
}
