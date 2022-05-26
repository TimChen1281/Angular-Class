import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  sitename = "123";
  logo = "tim TEST"

  ngOnInit(): void {
    setTimeout(()=>{
      this.sitename = "345"
    },2000);
  }

}
