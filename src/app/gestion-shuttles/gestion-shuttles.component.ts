import { Component, OnInit } from '@angular/core';

import { listeShuttles } from '../shuttles';

@Component({
  selector: 'app-gestion-shuttles',
  templateUrl: './gestion-shuttles.component.html',
  styleUrls: ['./gestion-shuttles.component.css']
})
export class GestionShuttlesComponent implements OnInit {

  shuttles = listeShuttles;

  constructor() { }

  ngOnInit() {
  }

  gestionShuttles() {
    window.alert("You do not have sufficient privileges");
  }

}