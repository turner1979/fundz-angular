import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzDashboardComponent } from './fdz-dashboard.component';

describe('FdzDashboardComponent', () => {
  let component: FdzDashboardComponent;
  let fixture: ComponentFixture<FdzDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
