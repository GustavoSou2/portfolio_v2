import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterLimit'
})
export class CharacterLimitPipe implements PipeTransform {

  transform(value: string, limit: number): unknown {
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + '...';
  }

}
