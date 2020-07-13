import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FdzFund } from '@fdz/models';
import { FdzFundService } from '@fdz/services';

@Component({
  selector: 'fdz-dashboard',
  templateUrl: './fdz-dashboard.component.html',
  styleUrls: ['./fdz-dashboard.component.scss']
})
export class FdzDashboardComponent implements OnInit {

  funds$:Observable<FdzFund[]>;

  constructor (
    private fundService: FdzFundService
  ) {

  }

  ngOnInit(): void {
    this.fundService.getFunds().subscribe((funds) => {
      this.funds$ = of(funds);
    });
  }

}
