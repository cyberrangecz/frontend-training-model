import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KypoTrainingModelComponent } from './kypo-training-model.component';

describe('KypoTrainingModelComponent', () => {
  let component: KypoTrainingModelComponent;
  let fixture: ComponentFixture<KypoTrainingModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KypoTrainingModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KypoTrainingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
