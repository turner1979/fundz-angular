import { Component, OnInit, Version, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fdz-header',
  templateUrl: './fdz-header.component.html',
  styleUrls: ['./fdz-header.component.scss']
})
export class FdzHeaderComponent implements OnInit {

  version: Version;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.version = VERSION;
  }

  onBackClick() {
    this.router.url === '/funds' ? this.router.navigate(['/']) : this.router.navigate(['/funds']);
  }

}
