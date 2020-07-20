import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FdzFundService } from '@fdz/services';

@Component({
  selector: 'fdz-funds',
  templateUrl: './fdz-funds.component.html',
  styleUrls: ['./fdz-funds.component.scss']
})
export class FdzFundsComponent implements OnInit {

  addFundModalVisible = false;

  constructor (
    public fundService: FdzFundService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  setAddFundModalVisibility(state: boolean) {
    this.addFundModalVisible = state;
  }

  onBackClick() {
    this.router.url === '/funds' ? this.router.navigate(['/']) : this.router.navigate(['/funds']);
  }

}
