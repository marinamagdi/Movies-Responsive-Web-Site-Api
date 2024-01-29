import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent {
  constructor(private service:MoviesService) {
   
    
  }
  userName:string='ahmed';
  trendingTv:any[]=[];
  ngOnInit():void{
    this.service.gettrending('tv').subscribe({
      //hot feha data eli rag3a
      next:(response)=>  this.trendingTv=response.results
    })}
}
