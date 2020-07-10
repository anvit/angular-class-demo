import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  title:string = "Home component";
  desc:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur asperiores quibusdam culpa accusantium commodi consequatur aliquam qui, error perspiciatis id saepe ea amet sed doloremque magni similique itaque natus.';

  myString: string;
  isDisabled:boolean = false;

  fruits: Array<string> = ['banana', 'cherry', 'orange', 'apple', 'peach', 'coconut'];

  buttonClick(): void {
    // this.isDisabled = !this.isDisabled;
    this.dataService.addCard(this.myString);
    this.myString = '';
  }

  constructor(private dataService: DataService) { 
    console.log('in Home constructor');
  }

  ngOnInit(): void {
    console.log('in Home on init');
  }

  ngOnDestroy(): void {
    console.log('in Home on destroy');
  }
}
