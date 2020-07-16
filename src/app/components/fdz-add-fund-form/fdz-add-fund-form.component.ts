import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FdzFundService } from '@fdz/services';

@Component({
  selector: 'fdz-add-fund-form',
  templateUrl: './fdz-add-fund-form.component.html',
  styleUrls: ['./fdz-add-fund-form.component.scss']
})
export class FdzAddFundFormComponent implements OnInit {

  newFundForm: FormGroup;
  @Output() newFundAdd = new EventEmitter<boolean>();

  constructor(private fundService: FdzFundService) { }

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
      this.fundService.addFund({
        id: [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join(''), // Generates random token string. TODO: move to new token service
        current: 0,
        name: this.newFundForm.value.fundName,
        target: this.newFundForm.value.fundTarget
      });
      this.newFundAdd.emit(true);
    }
  }

}
