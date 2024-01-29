import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
/**
 *
 */
term:string='';
trendingMovies:any[]=[];
trendingTv:any[]=[];
trendingPeople:any[]=[];

constructor(private services:MoviesService) {

  
}
ngOnInit():void{
  this.services.gettrending('movie').subscribe({
    //hot feha data eli rag3a
    next:(response)=>  this.trendingMovies=response.results.slice(0,16)
  })
  this.services.gettrending('tv').subscribe({
    //hot feha data eli rag3a
    next:(response)=>  this.trendingTv=response.results.slice(0,16)
  })
  this.services.gettrending('person').subscribe({
    //hot feha data eli rag3a
    next:(response)=>  this.trendingPeople=response.results.filter((item:any)=>item.profile_path!==null).slice(0,16)
  })
}

}
