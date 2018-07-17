import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintAutocompleteComponent } from './hint-autocomplete.component';

describe('HintAutocompleteComponent', () => {
  let component: HintAutocompleteComponent;
  let fixture: ComponentFixture<HintAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
