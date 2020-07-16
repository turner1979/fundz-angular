import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzIconComponent } from './fdz-icon.component';

describe('FdzIconComponent', () => {
  let component: FdzIconComponent;
  let fixture: ComponentFixture<FdzIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
