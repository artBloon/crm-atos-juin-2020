import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caTTC'
})
export class CaTTCPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    if (value){
      return(value.ca +value.tva);
    }
    return null;
  }

}
