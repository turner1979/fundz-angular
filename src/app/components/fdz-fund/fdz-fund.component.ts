import { Component, OnInit } from '@angular/core';
import { FdzFundService } from '@fdz/services';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FdzFund } from '@fdz/models';

@Component({
  selector: 'fdz-fund',
  templateUrl: './fdz-fund.component.html',
  styleUrls: ['./fdz-fund.component.scss']
})
export class FdzFundComponent implements OnInit {

  activeTabIndex = 0;
  addContributionForm: FormGroup;
  addContributionAmountControl: FormControl;
  addContributionDateControl: FormControl;
  addContributionNameControl: FormControl;
  addContributionSuccessMessageVisible = false;
  editFundForm: FormGroup;
  editFundNameControl: FormControl;
  editFundTargetControl: FormControl;
  editSuccessMessageVisible = false;
  fund$: Observable<FdzFund>;
  fund: FdzFund;
  id: string;
  loading = false;

  constructor(
    private fundService: FdzFundService,
    private route: ActivatedRoute,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fundService.getFund(this.id).subscribe((fund) => {
      this.fund$ = of(fund);
      this.fund = fund;
      this.setupForms();
      this.setFormControlRefs();
      this.addFormValidation();
    });
  }

  setupForms(): void {
    this.addContributionForm = new FormGroup({
      'date': new FormControl(''),
      'name': new FormControl(''),
      'amount': new FormControl('')
    });
    this.editFundForm = new FormGroup({
      'name': new FormControl(this.fund.name),
      'target': new FormControl(this.fund.target)
    });
  }

  setFormControlRefs(): void {
    this.addContributionAmountControl = this.addContributionForm.get('amount') as FormControl;
    this.addContributionDateControl = this.addContributionForm.get('date') as FormControl;
    this.addContributionNameControl = this.addContributionForm.get('name') as FormControl;
    this.editFundNameControl = this.editFundForm.get('name') as FormControl;
    this.editFundTargetControl = this.editFundForm.get('target') as FormControl;
  }

  addFormValidation() {
    this.addContributionFormValidation();
    this.editFundFormValidation();
  }

  addContributionFormValidation():void {
    this.addContributionAmountControl.setValidators([
      Validators.required,
      Validators.max(this.fund.target - this.fund.current),
      Validators.minLength(1),
      Validators.maxLength(12)
    ]);
    this.addContributionDateControl.setValidators([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8)
    ]);
    this.addContributionNameControl.setValidators([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20)
    ]);
    this.addContributionForm.updateValueAndValidity();
  }

  editFundFormValidation():void {
    this.editFundNameControl.setValidators([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20)
    ]);
    this.editFundTargetControl.setValidators([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(12),
      Validators.min(this.fund.current)
    ]);
    this.editFundForm.updateValueAndValidity();
  }

  onTabChange(index: number): void {
    this.activeTabIndex = index;
    this.editSuccessMessageVisible = false;
    this.addContributionSuccessMessageVisible = false;
  }

  onBackClick(): void {
    this.router.url === '/funds' ? this.router.navigate(['/']) : this.router.navigate(['/funds']);
  }

  onEditFundSubmit(): void {
    if (this.editFundForm.valid) {
      this.setLoadingState(true);
      this.fundService.editFund(
        this.fund, 
        this.editFundForm.value.name, 
        this.editFundForm.value.target
      ).then(() => {
        this.setLoadingState(false);
        this.editSuccessMessageVisible = true;
        this.editFundForm.reset({ 'name' : this.fund.name, 'target' : this.fund.target });
        this.addFormValidation();
      });
    }
  }

  onEditFundSuccessButton(): void {
    this.editSuccessMessageVisible = false;
  }

  onAddContributionSubmit(): void {
    if (this.addContributionForm.valid) {
      this.setLoadingState(true);
      this.fundService.addContribution(this.fund, {
        amount: this.addContributionForm.value.amount,
        date: this.addContributionForm.value.date,
        name: this.addContributionForm.value.name
      }).then(() => {
        this.setLoadingState(false);
        this.addContributionSuccessMessageVisible = true;
        this.addContributionForm.reset();
        this.addFormValidation();
      });
    }
  }

  setLoadingState(state: boolean) {
    setTimeout(() => {
      this.loading = state;
    });
  }

  onAddContributionSuccessButton(): void {
    this.addContributionSuccessMessageVisible = false;
  }

  onDeleteFund(fund: FdzFund) {
    this.fundService.deleteFund(fund).then(() => {
      this.router.navigate(['/funds']);
    });
  }

}
