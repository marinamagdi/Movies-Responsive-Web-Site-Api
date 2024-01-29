import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  constructor(private service:MoviesService) {
   
    
  }
  trendingpeople:any[]=[];
  ngOnInit():void{
    this.service.gettrending('person').subscribe({
      //hot feha data eli rag3a
      next:(response)=>  this.trendingpeople=response.results
    })}

}
