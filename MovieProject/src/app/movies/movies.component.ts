import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  /**
   *
   */
  constructor(private service:MoviesService) {
   
    
  }
  trendingMovies:any[]=[];
  ngOnInit():void{
    this.service.gettrending('movie').subscribe({
      //hot feha data eli rag3a
      next:(response)=>  this.trendingMovies=response.results
    })}

}
