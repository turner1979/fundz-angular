import { Component, OnInit } from '@angular/core';
import { FdzFundService } from '@fdz/services';
import { ActivatedRoute, Router } from '@angular/router';
import { FdzFund } from '@fdz/models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'fdz-fund',
  templateUrl: './fdz-fund.component.html',
  styleUrls: ['./fdz-fund.component.scss']
})
export class FdzFundComponent implements OnInit {

  activeTabIndex = 0;
  fund$: Observable<FdzFund>;

  constructor(
    private fundService: FdzFundService,
    private route: ActivatedRoute,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fundService.getFund(id).subscribe((fund) => {
      this.fund$ = of(fund);
    });
  }

  onTabChange(index: number) {
    this.activeTabIndex = index;
  }

  onBackClick() {
    this.router.url === '/funds' ? this.router.navigate(['/']) : this.router.navigate(['/funds']);
  }

}
