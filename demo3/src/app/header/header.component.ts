import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  keyword = "123";
  counter = 12;
  isClick = false

  ngOnInit(): void {
  }

  doString(event:MouseEvent){
    this.counter++;
    this.isClick = !this.isClick
    this.keyword = "456";
  }

}
