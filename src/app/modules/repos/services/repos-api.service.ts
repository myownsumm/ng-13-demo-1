import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, } from 'rxjs';
import { Repo, ReposResponse } from '../repos.typings';

// TODO. should be taken from config
const URI = 'https://api.github.com/search/repositories';

@Injectable()
export class ReposApiService {
  constructor(private http: HttpClient) {
  }

  public getRepos(q: string, delayValue: number): Observable<Repo[]> {
    const options = q ? {params: new HttpParams().set('q', q)} : {};

    return this.http.get<ReposResponse>(URI, options).pipe(
      map((response: ReposResponse) => response.items),
      delay(delayValue),
    );
  }
}
