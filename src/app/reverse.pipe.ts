import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'reverse'
})

export class ReversePipe implements PipeTransform {
  transform(value: string) {
    // convert the string into an array so we can use the Javascript "reverse"
    //..function, then convert back to a string
    return value.split('').reverse().join('');
  }
}
