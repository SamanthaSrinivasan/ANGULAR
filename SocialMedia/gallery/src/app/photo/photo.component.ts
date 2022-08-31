import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  public pic = [
    {pName:'Charles Leclerc', Photo:'assets/lec.png',Like:0,Dislike:0},
    {pName:'Lewis Hamilton', Photo:'assets/ham.jpg',Like:0,Dislike:0}
  ]

  ngOnInit(): void {
  }

  public LikeCounter(pic:any){
    pic.Like++;
  }

  public DislikeCounter(pic:any){
    pic.Dislike++;
  }

}
