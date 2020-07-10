import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'My Home Page';

  name: string = 'Card!';

  displayCards: Array<string> = ['Display Some Text', 'Another piece of text', 'Some more text','Just text'];

  routeArray = [{route: '/homepage', text: 'Home'}, {route: '/contact', text: 'About'}];

  ngOnInit(): void {
    console.log('in App on init');
  }

  constructor() {
    console.log('in App constructor');
  }
}
