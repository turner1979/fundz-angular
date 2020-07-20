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
  addContributionSuccessMessageVisible = false;
  editFundForm: FormGroup;
  editSuccessMessageVisible = false;
  fund$: Observable<FdzFund>;
  fund: FdzFund;
  id: string;

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
    });
  }

  setupForms(): void {

    this.editFundForm = new FormGroup({
      'name': new FormControl(this.fund.name, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      'target': new FormControl(this.fund.target, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12)
      ]),
    });

    this.addContributionForm = new FormGroup({
      'date': new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      'amount': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12)
      ]),
    });

  }

  onTabChange(index: number): void {
    this.activeTabIndex = index;
  }

  onBackClick(): void {
    this.router.url === '/funds' ? this.router.navigate(['/']) : this.router.navigate(['/funds']);
  }

  onEditFundSubmit(): void {
    if (this.editFundForm.valid) {
      this.fundService.editFund(
        this.fund, 
        this.editFundForm.value.name, 
        this.editFundForm.value.target
      );
      this.editSuccessMessageVisible = true;
      this.editFundForm.reset({
        'name' : this.fund.name,
        'target' : this.fund.target
      });
    }
  }

  onEditFundSuccessButton(): void {
    this.editSuccessMessageVisible = false;
    this.activeTabIndex = 0;
  }

  onAddContributionSubmit(): void {
    if (this.addContributionForm.valid) {
      this.fundService.addContribution(this.fund, {
        amount: this.addContributionForm.value.amount,
        date: this.addContributionForm.value.date,
        name: this.addContributionForm.value.name
      });
      this.addContributionSuccessMessageVisible = true;
      this.addContributionForm.reset();
    }
  }

  onAddContributionSuccessButton(): void {
    this.addContributionSuccessMessageVisible = false;
    this.activeTabIndex = 0;
  }

}
