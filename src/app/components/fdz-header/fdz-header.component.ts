import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fdz-header',
  templateUrl: './fdz-header.component.html',
  styleUrls: ['./fdz-header.component.scss']
})
export class FdzHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onBackClick() {
    this.router.url === '/funds' ? this.router.navigate(['/']) : this.router.navigate(['/funds']);
  }

}
