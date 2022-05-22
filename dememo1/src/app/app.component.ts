import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dememo1';
  keyword ='123';
  data:any[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get<any[]>('/api/articles.json').subscribe({
      next: (result)=>{
        this.data = result;
      }
    })
  }

  changeKeyword(str:string) {
    this.keyword = str;
  }
}
