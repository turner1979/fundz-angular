import { Component, OnInit, Input } from '@angular/core';
import { FdzMessage } from '@fdz/models';

@Component({
  selector: 'fdz-message',
  templateUrl: './fdz-message.component.html',
  styleUrls: ['./fdz-message.component.scss']
})
export class FdzMessageComponent implements OnInit {

  @Input() options: FdzMessage;

  constructor() { }

  ngOnInit(): void {

  }

}
