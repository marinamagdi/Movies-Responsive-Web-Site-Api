import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Movies:any[],term:string): any[] {
    return Movies.filter((movie)=>movie.title.toLowerCase().includes(term.toLowerCase()));
  }

}
