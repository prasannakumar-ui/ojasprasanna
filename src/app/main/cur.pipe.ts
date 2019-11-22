import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cur'
})
export class CurPipe implements PipeTransform {

  transform(salary){
  
 return 'Rs'+ salary

}

}
