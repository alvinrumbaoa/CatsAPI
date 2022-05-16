import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent{
  
  numberOfLikes : number = 0;
  
 likeButton(){
   this.numberOfLikes++;
 }

 dislikeButton(){
  this.numberOfLikes === 0 ? 0 :  this.numberOfLikes--;

 
}



}
