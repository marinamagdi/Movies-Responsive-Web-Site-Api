import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {

itemdetials:any;
similar:any[]=[];
mediatype:string='';
constructor(private _ActivatedRoute:ActivatedRoute,private _services:MoviesService) {
 
}
ngOnInit():void{
 let {id,media_type}= this._ActivatedRoute.snapshot.params;
this.mediatype=media_type
this._services.getitemdetails(id,media_type).subscribe({
  next:(result)=>this.itemdetials=result
 
})
this._services.getsmilar(id,media_type).subscribe({
  next:(data)=>this.similar=data.results
 
})
}
getsimilar(id:string,media_type:string){
  this._services.getitemdetails(id,media_type).subscribe({
    next:(result)=>this.itemdetials=result
   
  })
  this._services.getsmilar(id,media_type).subscribe({
    next:(data)=>this.similar=data.results
   
  })
}
}

