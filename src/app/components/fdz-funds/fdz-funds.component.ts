import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FdzFund } from '@fdz/models';
import { FdzFundService } from '@fdz/services';

@Component({
  selector: 'fdz-funds',
  templateUrl: './fdz-funds.component.html',
  styleUrls: ['./fdz-funds.component.scss']
})
export class FdzFundsComponent implements OnInit {

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
