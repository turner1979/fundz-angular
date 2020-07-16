import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzModalComponent } from './fdz-modal.component';

describe('FdzModalComponent', () => {
  let component: FdzModalComponent;
  let fixture: ComponentFixture<FdzModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
