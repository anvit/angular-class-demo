import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My Home Page';

  displayCards: Array<string> = ['Display Some Text', 'Another piece of text', 'Some more text','Just text'];

  routeArray = [{route: '/homepage', text: 'Home'}, {route: '/contact', text: 'About'}];
}
