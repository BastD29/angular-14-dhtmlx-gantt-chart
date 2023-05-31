import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Link } from '../models/link';
import { HttpClient } from '@angular/common/http';
import { HandleError } from './service-helper';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private linkUrl = 'api/links';

  constructor(private http: HttpClient) {}

  // get(): Promise<Link[]> {
  //   return Promise.resolve([{ id: 1, source: 1, target: 2, type: '0' }]);
  // }

  get(): Observable<Link[]> {
    return of([{ id: 1, source: 1, target: 2, type: '0' }]);
  }

  insert(link: Link): Observable<Link> {
    return this.http
      .post<Link>(this.linkUrl, link)
      .pipe(catchError(HandleError));
  }

  update(link: Link): Observable<void> {
    return this.http
      .put<Link>(`${this.linkUrl}/${link.id}`, link)
      .pipe(catchError(HandleError));
  }

  remove(id: number): Observable<void> {
    return this.http
      .delete<Link>(`${this.linkUrl}/${id}`)
      .pipe(catchError(HandleError));
  }
}
