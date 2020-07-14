import { Component, OnInit, VERSION } from '@angular/core';
import { Version } from '@angular/compiler';

@Component({
  selector: 'app-fdz-home',
  templateUrl: './fdz-home.component.html',
  styleUrls: ['./fdz-home.component.scss']
})
export class FdzHomeComponent implements OnInit {
  
  version: Version;

  constructor() { }

  ngOnInit(): void {
    this.version = VERSION;
  }

}
