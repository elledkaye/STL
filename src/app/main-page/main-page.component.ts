import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Subscribe } from '../subscribe';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent  { 
 
  subscribeModel = new Subscribe('');
  
  constructor() { }

  ngOnInit() {
  }

}
