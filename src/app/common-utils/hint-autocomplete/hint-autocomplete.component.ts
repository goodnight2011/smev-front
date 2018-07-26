import {Component, Input, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/internal/operators";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/index";
import {HintProviderService} from '../services/hint-provider/hint-provider.service';

@Component({
  selector: 'app-hint-autocomplete',
  templateUrl: './hint-autocomplete.component.html',
  styleUrls: ['./hint-autocomplete.component.css']
})
export class HintAutocompleteComponent implements OnInit {

  hints$: Observable<string[]>;
  control: FormControl = new FormControl();
  private text: string;
  @Input() code: string;

  constructor(private hintService: HintProviderService) {
    this.hints$ = this.control.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(str => hintService.getHints(this.code, str))
    );
  }

  ngOnInit() {
  }


}
