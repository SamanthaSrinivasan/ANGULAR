import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {

  constructor(private api: NewsapiService) { }

  topHeadlinesData: any[] = [];

  ngOnInit(): void {
    this.api.topHeadlines().subscribe(result=>{ console.log(result); 
    this.topHeadlinesData = result.articles;   // To store res data into topHeadlinesData // articles - inspect console
    });
  }

}
