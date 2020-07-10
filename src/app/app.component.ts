import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'My Home Page';

  displayCards: Array<string>;

  routeArray = [{route: '/homepage', text: 'Home'}, {route: '/contact', text: 'About'}];

  ngOnInit(): void {
    console.log('in App on init');
  }

  constructor(private dataService: DataService) {
    // fetch the display cards from data service
    this.displayCards = dataService.getCards();
    console.log('in App constructor');
  }

  cardRemoved(elementRemoved: string): void {
    this.dataService.deleteItem(elementRemoved);
    console.log(this.dataService.getCards());
  }
}
