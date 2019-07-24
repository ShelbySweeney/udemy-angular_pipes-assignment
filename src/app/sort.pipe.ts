import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortProp: any, dir: string): any {
    // if array is empty or no sortProp provided, return unsorted data
    if (value.length === 0 || sortProp === null) {
      console.log(value);
      return value;
    }
    // if no direction given, assume sorting ascending
    if (!dir) {
      dir = 'asc';
    }
    // sort the data in ascending order if that's the given direction
    if (dir === 'asc') {
      return value.sort(function(a, b){
        if (a[sortProp] < b[sortProp]) {return -1;}
        if (a[sortProp] > b[sortProp]) {return 1;}
        return 0;
      });
    }
    // sort the data in descending order if that's the given direction
    if (dir === 'desc') {
      return value.sort(function(a, b){
        if (a[sortProp] < b[sortProp]) {return 1;}
        if (a[sortProp] > b[sortProp]) {return -1;}
        return 0;
      });
    }
  }

}
