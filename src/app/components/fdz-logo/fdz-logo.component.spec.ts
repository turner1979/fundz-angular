import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzLogoComponent } from './fdz-logo.component';

describe('FdzLogoComponent', () => {
  let component: FdzLogoComponent;
  let fixture: ComponentFixture<FdzLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
