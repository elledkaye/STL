import { Component, OnInit } from '@angular/core';
import { Subscribe } from '../subscribe';
import { FormGroup, FormControl } from '@angular/forms';

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
  orderForm: FormGroup = new FormGroup({ 
    orderPickup: new FormControl(true),
    orderDelivery: new FormControl(true)
  })
}
