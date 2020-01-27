import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-parameters',
  templateUrl: './admin-parameters.component.html',
  styleUrls: ['./admin-parameters.component.css']
})
export class AdminParametersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pasImplemente() {
    window.alert("You don't have enough privileges!");
  }

}