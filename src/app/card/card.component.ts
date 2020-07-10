import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  isVisible: boolean = true;
  closeContainer(): void {
    this.isVisible = false;
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
