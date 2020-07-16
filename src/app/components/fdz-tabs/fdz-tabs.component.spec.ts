import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzTabsComponent } from './fdz-tabs.component';

describe('FdzTabsComponent', () => {
  let component: FdzTabsComponent;
  let fixture: ComponentFixture<FdzTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
