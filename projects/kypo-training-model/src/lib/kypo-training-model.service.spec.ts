import { TestBed } from '@angular/core/testing';

import { KypoTrainingModelService } from './kypo-training-model.service';

describe('KypoTrainingModelService', () => {
  let service: KypoTrainingModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KypoTrainingModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
