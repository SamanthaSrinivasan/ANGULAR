import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }
  topNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=db4903f0010a402d8ff14145fc16f73e'

  topHeadlines(): Observable<any>{
    return this.http.get(this.topNews);
  }
}
