import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FdzFundService } from '@fdz/services';
import { FdzFund } from '@fdz/models';

@Component({
  selector: 'fdz-funds',
  templateUrl: './fdz-funds.component.html',
  styleUrls: ['./fdz-funds.component.scss']
})
export class FdzFundsComponent implements OnInit {

  addFundModalVisible = false;
  loading = false;

  constructor(
    public fundService: FdzFundService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  setAddFundModalVisibility(state: boolean): void {
    this.addFundModalVisible = state;
  }

  onBackClick(): void {
    this.router.url === '/funds' ? this.router.navigate(['/']) : this.router.navigate(['/funds']);
  }

  onEditFund(fund: FdzFund): void {
    this.router.navigate(['fund', fund.id]);
  }

  onDeleteFund(fund: FdzFund): void {
    this.setLoadingState(true);
    this.fundService.deleteFund(fund).then(() => {
      this.setLoadingState(false);
    }).catch(() => {
      // Real world example would display error message in UI
    });
  }

  setLoadingState(state: boolean): void {
    setTimeout(() => {
      this.loading = state;
    });
  }

}
