import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/Article.model';

@Injectable({
  providedIn: 'root'
})
export class ConsoapiService {

  articleList! : Article[]

  constructor(
    private _client : HttpClient
  ) { }

  getAll() : Observable<Article[]> {
   return this._client.get<Article[]>("http://localhost:3000/article")
    
  }

  create() : Observable<null> {
    let a : Article =  {nom : "test reload liste", prix : 42, description : "on test le post"}
     return this._client.post<null>("http://localhost:3000/article",a)
  }
}