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

  activeTabIndex = 1;
  addContributionForm: FormGroup;
  editFundForm: FormGroup;
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

  setupForms() {

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
      'date': new FormControl(''),
      'name': new FormControl(''),
      'amount': new FormControl(''),
    });

  }

  onTabChange(index: number) {
    this.activeTabIndex = index;
  }

  onBackClick() {
    this.router.url === '/funds' ? this.router.navigate(['/']) : this.router.navigate(['/funds']);
  }

  onEditFundSubmit() {
    if (this.editFundForm.valid) {
      this.fundService.editFund(
        this.fund, 
        this.editFundForm.value.name, 
        this.editFundForm.value.target
      );
    }
  }

  onAddContributionSubmit() {
    if (this.addContributionForm.valid) {
      alert('add contribution');
    }
  }

}
