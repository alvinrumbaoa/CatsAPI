import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loading: boolean = true
  onLoad() {
      this.loading = false;
  }
  constructor(private http: HttpClient){
    this.getCats();
    this.showBreed();
    this.searchById();
  }
    cats: any[] = [];
    newCats: any[] = [];
    getCats(){
      this.http.get('https://api.thecatapi.com/v1/images/search/')
      .subscribe((cats: any) =>{
        this.cats = cats;
      })
    
  }
  selectedOption: string = "";
  breedId: string = "";
  httpClient: any;
 
    showBreed(){
      this.http.get('https://api.thecatapi.com/v1/breeds/')
      .subscribe((newCats: any) =>{
        this.newCats = newCats;
      })  
  }

  searchById() {
    this.http.get('https://api.thecatapi.com/v1/breeds/search?breed_id='+ this.breedId)
    .subscribe((newCats:any) =>{     
      this.breedId = this.selectedOption;
      this.newCats = newCats;
  })

  
}
}
