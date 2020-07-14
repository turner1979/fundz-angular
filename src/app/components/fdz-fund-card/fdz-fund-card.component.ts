import { Component, OnInit, Input } from '@angular/core';
import { FdzFund } from '@fdz/models';
import { Router } from '@angular/router';

@Component({
  selector: 'fdz-fund-card',
  templateUrl: './fdz-fund-card.component.html',
  styleUrls: ['./fdz-fund-card.component.scss']
})
export class FdzFundCardComponent implements OnInit {

  @Input() fund: FdzFund

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  get barStyles(): any {
    return {
      'width' : this.getPercentage()
    };
  }

  get percentage(): string {
    return this.getPercentage();
  }

  getPercentage(): string {
    return `${(100 / this.fund.target) * this.fund.current}%`;
  }

  onFundClick() {
    this.router.navigate(['fund',this.fund.id]);
  }

}
