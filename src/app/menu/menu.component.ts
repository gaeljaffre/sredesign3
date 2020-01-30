import { Component, OnInit } from '@angular/core';

import { listeContrats } from '../contrats';
import { DetailContratService } from '../detail-contrat.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  lastVisited = [];
  afficherLastVisited = false;

  constructor(
     private detailContratService: DetailContratService
  ) { }

  ngOnInit() {
    this.lastVisited = [];
    this.lastVisited.push(listeContrats[1]);
    this.lastVisited.push(listeContrats[0]);
  }

  sauverContratCourant(contrat) {
    this.detailContratService.detailContrat(contrat);
    //window.alert('manage ' + contrat.name);
  }

  changerLastVisited() {
    this.afficherLastVisited = !this.afficherLastVisited;
  }

}