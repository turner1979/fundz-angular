import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzFundProgressComponent } from './fdz-fund-progress.component';

describe('FdzFundProgressComponent', () => {
  let component: FdzFundProgressComponent;
  let fixture: ComponentFixture<FdzFundProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzFundProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzFundProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
