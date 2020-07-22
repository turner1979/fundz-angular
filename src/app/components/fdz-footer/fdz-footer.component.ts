import { Component, OnInit, Input, Version, VERSION } from '@angular/core';

@Component({
  selector: 'fdz-footer',
  templateUrl: './fdz-footer.component.html',
  styleUrls: ['./fdz-footer.component.scss']
})
export class FdzFooterComponent implements OnInit {

  startYear = 2020;
  version: Version;
  year: number;

  @Input() colour = '#222';

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.version = VERSION;
  }

  get textStyle(): any {
    return {
      color : this.colour
    };
  }

}
