import { Component, OnInit, Version, VERSION } from '@angular/core';
import { FdzMessage } from '@fdz/models';

@Component({
  selector: 'fdz-version',
  templateUrl: './fdz-version.component.html',
  styleUrls: ['./fdz-version.component.scss']
})
export class FdzVersionComponent implements OnInit {

  messageOptions: FdzMessage;
  version: Version;

  constructor() { }

  ngOnInit(): void {
    this.version = VERSION;
    this.messageOptions = {
      text: [`This version of the fundz app was built with Angular v${this.version.full}`],
      type: 'info'
    };
  }

}
