import { TestBed, inject } from '@angular/core/testing';

import { TextProcessorService } from './text-processor.service';

describe('TextProcessorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextProcessorService]
    });
  });

  it('should be created', inject([TextProcessorService], (service: TextProcessorService) => {
    expect(service).toBeTruthy();
  }));
});
