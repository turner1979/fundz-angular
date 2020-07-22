import { Component, OnInit, Input } from '@angular/core';
import { FdzFundPill } from '@fdz/models';

@Component({
  selector: 'fdz-fund-pill',
  templateUrl: './fdz-fund-pill.component.html',
  styleUrls: ['./fdz-fund-pill.component.scss']
})
export class FdzFundPillComponent implements OnInit {

  @Input() options: FdzFundPill;

  constructor() { }

  ngOnInit(): void {

  }

  get typeClass(): string {
    return this.options.text.toLowerCase().replace(' ', '-');
  }

}
