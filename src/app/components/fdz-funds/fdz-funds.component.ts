import { Component, OnInit } from '@angular/core';
import { FdzFundService } from '@fdz/services';

@Component({
  selector: 'fdz-funds',
  templateUrl: './fdz-funds.component.html',
  styleUrls: ['./fdz-funds.component.scss']
})
export class FdzFundsComponent implements OnInit {

  addFundModalVisible = true;

  constructor (private fundService: FdzFundService) {

  }

  ngOnInit(): void {

  }

  setAddFundModalVisibility(state: boolean) {
    this.addFundModalVisible = state;
  }

}
