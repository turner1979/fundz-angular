import { Component, OnInit, Input } from '@angular/core';
import { FdzButton } from '@fdz/models';

@Component({
  selector: 'fdz-button',
  templateUrl: './fdz-button.component.html',
  styleUrls: ['./fdz-button.component.scss']
})
export class FdzButtonComponent implements OnInit {

  @Input() options: FdzButton;

  constructor() { }

  ngOnInit(): void {

  }

}
