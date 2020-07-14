import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzFundCardComponent } from './fdz-fund-card.component';

describe('FdzFundOverviewComponent', () => {
  let component: FdzFundCardComponent;
  let fixture: ComponentFixture<FdzFundCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzFundCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzFundCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
