import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzHeaderComponent } from './fdz-header.component';

describe('FdzHeaderComponent', () => {
  let component: FdzHeaderComponent;
  let fixture: ComponentFixture<FdzHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
