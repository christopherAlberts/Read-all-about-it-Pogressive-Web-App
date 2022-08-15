import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  status: string;
  totalResults: number;
  articles: any[];
  // total_results: number;
  currentPage: 1;
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }

  getTopHeadlines(page = 1): Observable<ApiResult>{
    console.log("url + key: ")
    console.log(`${environment.baseUrl}${environment.apiKey}`);

    return this.http.get<ApiResult>(
      
      `${environment.baseUrl}${environment.apiKey}`
    );
  }
}
