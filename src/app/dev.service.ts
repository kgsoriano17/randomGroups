import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Devs } from './devs';
import { TEAM1, TEAM2, TEAM3, TEAM4 } from './mock-devs';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class DevService {

  constructor(private messageService: MessageService) { }

  getDevs(): Observable<Devs[]> {
    this.messageService.add('DevService: fetched Developers');
    return of(TEAM1);
  }
  getDev(id: number): Observable<Devs> { // Devs[]
    this.messageService.add('DevService: fetched Developers');
    return of(TEAM1.find(dev => dev.id === id));
  }
}
