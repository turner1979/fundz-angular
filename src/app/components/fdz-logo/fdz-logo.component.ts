import { Component, OnInit, Input } from '@angular/core';
import { FDZ_COLOURS } from '@fdz/config';

@Component({
  selector: 'fdz-logo',
  templateUrl: './fdz-logo.component.html',
  styleUrls: ['./fdz-logo.component.scss']
})
export class FdzLogoComponent implements OnInit {

  colours = FDZ_COLOURS;
  @Input() alt = false;

  constructor() { }

  ngOnInit(): void {

  }

}
