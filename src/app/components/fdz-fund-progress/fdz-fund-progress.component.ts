import { Component, OnInit, Input } from '@angular/core';
import { FdzFund } from '@fdz/models';

@Component({
  selector: 'fdz-fund-progress',
  templateUrl: './fdz-fund-progress.component.html',
  styleUrls: ['./fdz-fund-progress.component.scss']
})
export class FdzFundProgressComponent implements OnInit {

  @Input() fund: FdzFund

  constructor() { }

  ngOnInit(): void {

  }

  get stripStyles() {
    return {
      'width' : `${(100 / this.fund.target) * this.fund.current}%`,
      'background-color' : this.fund.colour 
    };
  }

}
