import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-breed-search',
  templateUrl: './breed-search.component.html',
  styleUrls: ['./breed-search.component.css']
})
export class BreedSearchComponent {

  constructor(private http: HttpClient){
    this.showBreed();
  
  }
    cats: any[] = [];
   
    showBreed(){
      this.http.get('https://api.thecatapi.com/v1/breeds/')
      .subscribe((cats: any) =>{
        this.cats = cats;
      })
      
    
  }
  selectedCats: any;

}
