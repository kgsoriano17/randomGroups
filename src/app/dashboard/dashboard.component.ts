import { Component, OnInit } from '@angular/core';
import { Devs } from '../devs';
import { DevService } from '../dev.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.sass' ]
})
export class DashboardComponent implements OnInit {
  devs: Devs[] = [];

  constructor(private devService: DevService) { }

  ngOnInit() {
    this.getDevs();
  }

  getDevs(): void {
    this.devService.getDevs().subscribe(devs => this.devs = devs.slice(1, 5));
  }
}
