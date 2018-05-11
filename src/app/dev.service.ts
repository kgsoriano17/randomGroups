import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Devs } from './devs';
import { TEAM1, TEAM2, TEAM3, TEAM4 } from './mock-devs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DevService {
  private devsUrl = 'api/devs';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getDevs(): Observable<Devs[]> {
    this.messageService.add('DevService: fetched Developers');
    return this.http.get<Devs[]>(this.devsUrl).pipe(
      catchError(this.handleError('getDevs', []))
    );
  }
  getDev(id: number): Observable<Devs> { // Devs[]
    this.messageService.add('DevService: fetched Developers');
    return of(TEAM1.find(dev => dev.id === id));
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
