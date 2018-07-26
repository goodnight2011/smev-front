import { TestBed, inject } from '@angular/core/testing';

import { SearchFiltersHolderService } from './search-filters-holder.service';

describe('SearchFiltersHolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchFiltersHolderService]
    });
  });

  it('should be created', inject([SearchFiltersHolderService], (service: SearchFiltersHolderService) => {
    expect(service).toBeTruthy();
  }));
});
