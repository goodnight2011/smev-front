import { Injectable } from '@angular/core';
import {CodeWithValue} from '../../code-with-value';

@Injectable({
  providedIn: 'root'
})
export class SearchFiltersHolderService {

  filters: CodeWithValue[] = [
    {
      code: 'one',
      value: 'one',
      title: 'one'
    },
    {
      code: 'two',
      value: 'two',
      title: 'two'
    },
    {
      code: 'three',
      value: 'three',
      title: 'three'
    },
  ];
  constructor() { }

  getFilters():CodeWithValue[]{
    return this.filters;
  }

  add(elem: CodeWithValue):void{
    let index = this.indexOf(elem.code);
    if(index)
        this.filters[index] = elem;
    else this.filters.push(elem)
  }

  remove(code: string){
    let index=  this.indexOf(code);
    if(index) this.filters.splice(index, 1);
  }

  clear():void{
    this.filters = [];
  }

  getValue(code: string): string | Date{
    let index = this.indexOf(code);
    return index ? this.filters[index].value : undefined;
  }

  getTitle(code: string): string{
    let index = this.indexOf(code);
    return index ? this.filters[index].title : undefined;
  }

  private indexOf(code:string):number{
    let index = -1;
    this.filters.find((elem, ind) => {
      if (elem.code == code) {
        index = -1;
        return true;
      }
      return false;
    });
    return index;
  }


}
