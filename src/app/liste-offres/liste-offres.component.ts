import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { listeClauses } from '../clauses';
import { DetailContratService } from '../detail-contrat.service';

@Component({
  selector: 'app-liste-offres',
  templateUrl: './liste-offres.component.html',
  //styleUrls: ['./liste-offres.component.css']
  styleUrls: ['../style_vert.scss']
})
export class ListeOffresComponent implements OnInit {

  contrat;
  listeClauses = listeClauses;

  constructor(
    private route: ActivatedRoute,
    private detailContratService: DetailContratService
  ) { }

  ngOnInit() {
    this.contrat = this.detailContratService.contratCourant();
  }

}