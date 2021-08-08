import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResultJson } from './home/searchResultJson.model';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  url = 'https://openlibrary.org/';
  constructor(private http:HttpClient) { }

  getSearchResults(arg : string) {
      return this.http.get<SearchResultJson>(this.url + arg);
  }
}
