import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchData'
})
export class SearchDataPipe implements PipeTransform {

  transform(dataAllMovis:any[],item:string): any[] {
    return dataAllMovis.filter((all)=>all.overview.toLowerCase().includes(item.toLowerCase())) ;
  }

}
