import { Component, OnInit } from '@angular/core';
import { Subscribe } from '../subscribe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscribeModel = new Subscribe('');
  constructor() { }

  ngOnInit() {
  }

}
