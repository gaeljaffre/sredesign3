import { Component, OnInit } from '@angular/core';

import { listeContrats } from '../contrats';
import { DetailContratService } from '../detail-contrat.service';
import { MonIconeComponent } from '../mon-icone/mon-icone.component';

@Component({
  selector: 'app-gestion-contrats',
  templateUrl: './gestion-contrats.component.html',
  styleUrls: ['./gestion-contrats.component.css']
})
export class GestionContratsComponent implements OnInit {

  contractsList = listeContrats;

  constructor(
    private detailContratService: DetailContratService
  ) { }

  ngOnInit() {
  }

  sauverContratCourant(contrat) {
    this.detailContratService.detailContrat(contrat);
    //window.alert('manage ' + contrat.name);
  }

}