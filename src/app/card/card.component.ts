import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() cardName: string;

  @Output() message = new EventEmitter<string>();

  isVisible: boolean = true;
  closeContainer(): void {
    this.isVisible = false;
    this.message.emit(this.cardName);
  }
  constructor() {
    console.log('in Card constructor');
  }

  ngOnInit(): void {
    console.log('in Card on init');
  }

  ngOnDestroy(): void {
    console.log('in Card on destroy');
  }
}
