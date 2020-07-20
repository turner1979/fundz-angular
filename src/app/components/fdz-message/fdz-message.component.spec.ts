import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzMessageComponent } from './fdz-message.component';

describe('FdzMessageComponent', () => {
  let component: FdzMessageComponent;
  let fixture: ComponentFixture<FdzMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
