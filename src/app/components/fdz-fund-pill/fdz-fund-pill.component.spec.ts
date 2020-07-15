import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzFundPillComponent } from './fdz-fund-pill.component';

describe('FdzPillComponent', () => {
  let component: FdzFundPillComponent;
  let fixture: ComponentFixture<FdzFundPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzFundPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzFundPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
