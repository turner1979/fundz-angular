import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzFundDetailComponent } from './fdz-fund-detail.component';

describe('FdzFundDetailComponent', () => {
  let component: FdzFundDetailComponent;
  let fixture: ComponentFixture<FdzFundDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzFundDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzFundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
