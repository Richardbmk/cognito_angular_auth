import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
})
export class MessageModalComponent implements OnInit {
  @Input() message: string = '';
  @Input() modalClose = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  modalCloseClicked() {
    this.modalClose.emit(true);
  }
}
