import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Devs } from './devs';
import { TEAM1, TEAM2, TEAM3, TEAM4 } from './mock-devs';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  constructor() {

  }

  getDevs(): Observable<Devs[]> {
    return of(TEAM1);
  }
}
