import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR  } from '@angular/forms';
import { FdzColour } from '@fdz/models';

const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FdzInputColourComponent),
  multi: true
};

@Component({
  selector: 'fdz-input-colour',
  templateUrl: './fdz-input-colour.component.html',
  styleUrls: ['./fdz-input-colour.component.scss'],
  providers: [TYPE_CONTROL_ACCESSOR]
})
export class FdzInputColourComponent implements OnInit {

  public value: FdzColour;
  private onTouch: any;
  private onModelChange: any;

  @Input() name = '';
  @Input() options: FdzColour[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  writeValue(value: FdzColour): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onSelectOption(value: FdzColour): void {
    this.value = value;
    this.onModelChange(value);
    this.onTouch();
  }

}
