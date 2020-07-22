import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fdz-logo',
  templateUrl: './fdz-logo.component.html',
  styleUrls: ['./fdz-logo.component.scss']
})
export class FdzLogoComponent implements OnInit {

  @Input() alt = false;

  constructor() { }

  ngOnInit(): void {

  }

}
