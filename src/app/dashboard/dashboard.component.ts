import { Component, OnInit } from '@angular/core';
import { Devs } from '../devs';
import { DevService } from '../dev.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.sass' ]
})
export class DashboardComponent implements OnInit {
  heroes: Devs[] = [];

  constructor(private heroService: DevService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getDevs()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
