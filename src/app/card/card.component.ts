import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  isVisible: boolean = true;
  closeContainer(): void {
    this.isVisible = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
