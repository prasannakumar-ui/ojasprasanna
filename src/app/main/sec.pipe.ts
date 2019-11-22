import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sec'
})
export class SecPipe implements PipeTransform {

  transform(fdata,nam){
    if (nam==undefined){
      return fdata
    }
    else{
      return fdata.filter(
        function(x){
return x.name.toLowerCase().startsWith(
  nam.toLowerCase())
        }
      )
    }
  }

}
