import { Component, OnInit, Input } from '@angular/core';
import { FdzFund } from '@fdz/models';

@Component({
  selector: 'fdz-fund-progress',
  templateUrl: './fdz-fund-progress.component.html',
  styleUrls: ['./fdz-fund-progress.component.scss']
})
export class FdzFundProgressComponent implements OnInit {

  percentage = 0;

  @Input() fund: FdzFund;

  constructor() { }

  ngOnInit(): void {
    this.percentage = this.getPercentage();
  }

  get barStyles(): any {
    return {
      'width' : this.percentage + '%'
    };
  }

  getPercentage(): number {
    return (100 / this.fund.target) * this.fund.current;
  }

  get progressTitle() {
    let title: 'Fund Started' | 'Fund In Progress' | 'Fund Completed' = 'Fund Started'; 
    return title = (this.percentage === 100 ?  'Fund Completed' : ((this.percentage > 0) ? 'Fund In Progress' : 'Fund Started'));
  }

}
