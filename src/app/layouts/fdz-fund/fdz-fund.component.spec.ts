import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzFundComponent } from './fdz-fund.component';

describe('FdzFundComponent', () => {
  let component: FdzFundComponent;
  let fixture: ComponentFixture<FdzFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
