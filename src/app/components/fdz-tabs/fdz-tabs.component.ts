import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FzdTabs } from '@fdz/models';

@Component({
  selector: 'fdz-tabs',
  templateUrl: './fdz-tabs.component.html',
  styleUrls: ['./fdz-tabs.component.scss']
})
export class FdzTabsComponent implements OnInit {

  @Input() options: FzdTabs;
  @Output() tabChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  onTabClick(index: number) {
    this.options.activeIndex = index;
    this.tabChange.emit(index);
  }

}
