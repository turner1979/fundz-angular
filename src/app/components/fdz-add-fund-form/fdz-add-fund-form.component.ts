import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'fdz-add-fund-form',
  templateUrl: './fdz-add-fund-form.component.html',
  styleUrls: ['./fdz-add-fund-form.component.scss']
})
export class FdzAddFundFormComponent implements OnInit {

  newFundForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm() {
    this.newFundForm = new FormGroup({
      'fundName': new FormControl(''),
      'fundTarget': new FormControl('')
    });
  }

}
