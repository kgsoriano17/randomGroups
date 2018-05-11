import { Component, OnInit, Input } from '@angular/core';
import { Devs } from '../devs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DevService } from '../dev.service';
@Component({
  selector: 'app-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.sass']
})
export class DevDetailComponent implements OnInit {

  @Input() dev: Devs; // Devs[]?
  constructor(
    private route: ActivatedRoute,
    private devService: DevService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDev();
  }

  getDev(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.devService.getDev(id)
      .subscribe(dev => this.dev = dev);
  }

  goBack(): void {
    this.location.back();
  }
}
