import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fdz-modal',
  templateUrl: './fdz-modal.component.html',
  styleUrls: ['./fdz-modal.component.scss']
})
export class FdzModalComponent implements OnInit {

  @Input() visible = false;
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }

  onCloseModal() {
    this.closeModal.emit(true);
  }

}
