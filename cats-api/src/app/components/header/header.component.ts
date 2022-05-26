import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  numberOfSearchLikes: number = 0;
  numberOfLikes : number = 0;
  selectedOption: string = "";
  breedId: string = "";
  httpClient: any;
  key: string = "";
  public imageURL:string= "";
  public likes: number = 0;
  myAdoptedCat = ""
  resultImage: string  ="";
  resultLikes: number = 0;
  imageResult: string | null;
  likeResult: string | null;

  likeButton(){
    this.numberOfLikes++;
  }
  
  likeSearchButton(){
    this.numberOfSearchLikes++;
  }
  dislikeSearchButton(){
    if(this.breedId === ""){
      this.numberOfLikes === 0;
    }
   this.numberOfSearchLikes === 0 ? 0 :  this.numberOfSearchLikes--;
 }
 dislikeButton(){
  
  this.numberOfLikes === 0 ? 0 :  this.numberOfLikes--;
}
  constructor(private http: HttpClient){
    this.getCats();
    this.showBreed();
    this.searchById();
    this.adoptCat();
   
  }
  loading: boolean = true

    cats: any[] = [];
    newCats: any[] = [];
    
    getCats(){
      this.http.get('https://api.thecatapi.com/v1/images/search/')
      .subscribe((cats: any) =>{
        this.cats = cats;
      })
    
    }

  showBreed(){
      this.http.get('https://api.thecatapi.com/v1/breeds/')
      .subscribe((newCats: any,) =>{
        this.newCats = newCats;
     
      })  
  }
  public addedCats = {imageURL: this.imageURL, likes: this.numberOfLikes }
  searchById() {
    this.http.get('https://api.thecatapi.com/v1/breeds/search?breed_id='+ this.breedId)
    .subscribe((searchCats:any) =>{     
      this.breedId = this.selectedOption;
      
    })
  }

  adoptCat(){
    this.addedCats.imageURL = this.imageURL;
    this.addedCats.likes = this.numberOfLikes;
    localStorage.setItem(this.imageURL, JSON.stringify(this.addedCats));
   
 

  }


}
