import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class HintProviderService {
  private allTexts: Map<string, string[]>
  constructor(){
    this.allTexts = new Map();
    this.allTexts.set("inn", ["1234567890","76545456546", "15487985", "998878"]);
  }

  getHints(code:string, text:string):Observable<string[]>{
    return of(this.allTexts.get(code).filter(str => str.indexOf(text) != -1));
  }
}
