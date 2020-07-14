import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fdz-logo',
  templateUrl: './fdz-logo.component.html',
  styleUrls: ['./fdz-logo.component.scss']
})
export class FdzLogoComponent implements OnInit {

  @Input() colour = '#222222';
  @Input() fontSize = '16px';

  constructor() { }

  ngOnInit(): void {

  }

  get logoStyles() {
    return {
      'color' : this.colour,
      'font-size' : this.fontSize
    }
  }

}
