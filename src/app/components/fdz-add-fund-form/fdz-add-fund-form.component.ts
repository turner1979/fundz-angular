import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      'fundName': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      'fundTarget': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12)
      ])
    });
  }

  onSubmit() {
    if (this.newFundForm.valid) {
      alert('submite');
    }
  }

}
