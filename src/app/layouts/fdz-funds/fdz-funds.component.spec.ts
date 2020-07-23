import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzFundsomponent } from './fdz-funds.component';

describe('FdzFundsComponent', () => {
  let component: FdzFundsComponent;
  let fixture: ComponentFixture<FdzFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
