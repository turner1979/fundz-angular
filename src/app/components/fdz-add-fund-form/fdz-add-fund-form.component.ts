import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FdzButton } from '@fdz/models';
import { FdzFundService } from '@fdz/services';

@Component({
  selector: 'fdz-add-fund-form',
  templateUrl: './fdz-add-fund-form.component.html',
  styleUrls: ['./fdz-add-fund-form.component.scss']
})
export class FdzAddFundFormComponent implements OnInit {

  newFundForm: FormGroup;
  submitButtonOptions: FdzButton = { dark: true, text: 'Add', type: 'submit' };

  @Output() newFundAdd = new EventEmitter<boolean>();

  constructor(private fundService: FdzFundService) { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(): void {
    this.newFundForm = new FormGroup({
      fundName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      fundTarget: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12)
      ])
    });
  }

  onSubmit(): void {
    if (this.newFundForm.valid) {
      this.fundService.addFund({
        id: Math.random().toString(36).substr(2),
        current: 0,
        name: this.newFundForm.value.fundName,
        target: this.newFundForm.value.fundTarget
      }).then(() => {
        this.newFundAdd.emit(true);
      }).catch(() => {
        // Real world example would display error message in UI
      });

    }
  }

}
