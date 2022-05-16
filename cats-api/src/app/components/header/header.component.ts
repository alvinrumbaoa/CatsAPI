import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private http: HttpClient){
    this.getCats();
  
  }
    cats: any[] = [];
    getCats(){
      this.http.get('https://api.thecatapi.com/v1/images/search/')
      .subscribe((cats: any) =>{
        this.cats = cats;
      })
    
  }

}
