import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fdz-footer',
  templateUrl: './fdz-footer.component.html',
  styleUrls: ['./fdz-footer.component.scss']
})
export class FdzFooterComponent implements OnInit {

  startYear = 2020;
  year: number;

  @Input() colour = '#222';

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

  get textStyle(): any {
    return {
      color : this.colour
    };
  }

}
