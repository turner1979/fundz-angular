import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fdz-fund-progress',
  templateUrl: './fdz-fund-progress.component.html',
  styleUrls: ['./fdz-fund-progress.component.scss']
})
export class FdzFundProgressComponent implements OnInit {

  @Input() name:string;

  constructor() { }

  ngOnInit(): void {
  }

}
