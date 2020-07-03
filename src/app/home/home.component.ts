import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = "Home component";
  desc:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur asperiores quibusdam culpa accusantium commodi consequatur aliquam qui, error perspiciatis id saepe ea amet sed doloremque magni similique itaque natus.';

  myString: string;
  isDisabled:boolean = false;

  buttonClick(): void {
    this.isDisabled = !this.isDisabled;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
