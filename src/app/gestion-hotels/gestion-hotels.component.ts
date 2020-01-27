import { Component, OnInit } from '@angular/core';

import { listeHotels } from '../hotels';

@Component({
  selector: 'app-gestion-hotels',
  templateUrl: './gestion-hotels.component.html',
  styleUrls: ['./gestion-hotels.component.css']
})
export class GestionHotelsComponent implements OnInit {

  hotels = listeHotels;

  constructor() { }

  ngOnInit() {
  }

  gestionHotels() {
    window.alert("You do not have sufficient privileges");
  }

}