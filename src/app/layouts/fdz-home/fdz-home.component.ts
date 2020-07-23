import { Component, OnInit } from '@angular/core';
import { FdzButton } from '@fdz/models';

@Component({
  selector: 'app-fdz-home',
  templateUrl: './fdz-home.component.html',
  styleUrls: ['./fdz-home.component.scss']
})
export class FdzHomeComponent implements OnInit {

  buttonOptions: FdzButton = { dark: false, text: 'View App' };

  constructor() { }

  ngOnInit(): void {

  }

}
