import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fdz-icon',
  templateUrl: './fdz-icon.component.html',
  styleUrls: ['./fdz-icon.component.scss']
})
export class FdzIconComponent implements OnInit {

  @Input() iconClass: string;

  constructor() { }

  ngOnInit(): void {

  }

}
