import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd){
        const bodyElem = document.getElementsByTagName('body')[0];
        e.url === '/' ? bodyElem.classList.add('home') : bodyElem.classList.remove('home');
      }
    });
  }

}
