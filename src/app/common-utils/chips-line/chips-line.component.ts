import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeWithValue} from '../code-with-value';
import {SearchFiltersHolderService} from '../services/search-filters-holder/search-filters-holder.service';

@Component({
  selector: 'app-chips-line',
  templateUrl: './chips-line.component.html',
  styleUrls: ['./chips-line.component.css']
})
export class ChipsLineComponent implements OnInit {

  active: boolean = false;
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  filterService:SearchFiltersHolderService;

  constructor( filterService:SearchFiltersHolderService) {
    this.filterService = filterService;
  }

  ngOnInit() {
  }

  remove(value: CodeWithValue): void {
    this.filterService.remove(value.code);
  }

  clear(): void {
    this.filterService.clear();
  }

  protected activate(is: boolean): void {
    this.active = is;
    this.activeChange.emit(is);
  }

  isActive(): boolean{
    return this.active;
  }
}
