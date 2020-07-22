import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FdzFund } from '@fdz/models';

@Component({
  selector: 'fdz-fund-card',
  templateUrl: './fdz-fund-card.component.html',
  styleUrls: ['./fdz-fund-card.component.scss']
})
export class FdzFundCardComponent implements OnInit {

  @Input() fund: FdzFund;
  @Input() showEdit = true;
  @Output() editFund = new EventEmitter<FdzFund>();
  @Output() deleteFund = new EventEmitter<FdzFund>();

  constructor() { }

  ngOnInit(): void {

  }

  onEditFund(): void {
    this.editFund.emit(this.fund);
  }

  onDeleteFund(): void {
    this.deleteFund.emit(this.fund);
  }

}
