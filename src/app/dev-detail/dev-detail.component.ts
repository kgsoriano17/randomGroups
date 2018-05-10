import { Component, OnInit, Input } from '@angular/core';
import { Devs } from '../devs';
@Component({
  selector: 'app-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.sass']
})
export class DevDetailComponent implements OnInit {

  @Input() dev: Devs;
  constructor() { }

  ngOnInit() {
  }

}
