import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Celebrity } from './celebrity';

@Injectable({
  providedIn: 'root'
})
export class CelebrityService {
  private celebritiesUrl = 'api/celebrities';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
    getCelebrities(): Observable<Celebrity[]> {
      return this.http.get<Celebrity[]>(this.celebritiesUrl);
    }
    getCelebrity(id: number): Observable<Celebrity> {
      const url = `${this.celebritiesUrl}/${id}`;
      return this.http.get<Celebrity>(url);
    }

updateCelebrity(celebrity: Celebrity): Observable<any> {
  return this.http.put(this.celebritiesUrl, celebrity, this.httpOptions);
}

updateCelebrities(celebrities: Celebrity[]): Observable<any> {
  return this.http.put(this.celebritiesUrl, celebrities, this.httpOptions);
}

addCelebrity(celebrity: Celebrity): Observable<Celebrity> {
  return this.http.post<Celebrity>(this.celebritiesUrl, celebrity, this.httpOptions);
}

deleteCelebrity(celebrity: Celebrity | number): Observable<Celebrity> {
  const id = typeof celebrity === 'number' ? celebrity : celebrity.id;
  const url = `${this.celebritiesUrl}/${id}`;

  return this.http.delete<Celebrity>(url, this.httpOptions);
}

searchCelebrities(term: string): Observable<Celebrity[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Celebrity[]>(`${this.celebritiesUrl}/?FirstName=${term}`);
}
}
