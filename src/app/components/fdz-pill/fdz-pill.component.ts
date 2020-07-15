import { Component, OnInit, Input } from '@angular/core';
import { FdzPill } from '@fdz/models';

@Component({
  selector: 'fdz-pill',
  templateUrl: './fdz-pill.component.html',
  styleUrls: ['./fdz-pill.component.scss']
})
export class FdzPillComponent implements OnInit {

  @Input() options: FdzPill;

  constructor() { }

  ngOnInit(): void {
  }
  
  get typeClass(): string {
    return this.options.text.toLowerCase().replace(' ', '-');
  }

}
