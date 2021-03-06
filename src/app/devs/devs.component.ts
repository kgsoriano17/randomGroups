import { Component, OnInit } from '@angular/core';
import { Devs } from '../devs';
import { TEAM1, TEAM2, TEAM3, TEAM4 } from '../mock-devs';
import { DevService } from '../dev.service';

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.sass']
})
export class DevsComponent implements OnInit {

  team1 = TEAM1; // Should be Devs[]
  team2 = TEAM2;
  team3 = TEAM3;
  team4 = TEAM4;

  // selectedDev: Devs;

  constructor(private devService: DevService) { }

  // onSelect(hero: Devs): void {
  //   this.selectedDev = hero;
  // }
  ngOnInit() {
    this.getDevs();
  }
  getDevs(): void {
    this.devService.getDevs().subscribe(devs => this.team1 = devs);
  }
}
