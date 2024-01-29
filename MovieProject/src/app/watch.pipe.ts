import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watch'
})
export class WatchPipe implements PipeTransform {

  transform(original_title: string): string {
    return `watch ${original_title}`;
  }

}
