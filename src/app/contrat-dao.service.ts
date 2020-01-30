import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const url = 'https://RedesignBackend.voyagesgael.repl.co/';

export class Contrat {
  id: number;
  name: string;
  description: string;
  country: string;
  type: string;
  gin: string;
  ddv: string;
  dfv: Date;

/*
  constructor(id: number, name: string, numero: number) {
    this.id = id;
    this.name = name;
    this.numero = numero;
  }
  */
  constructor(c: Object) {
    //this = c;
    this.id = c.id;
    this.name = c.name;
    this.description = c.description;
    this.country = c.country;
    this.type = c.type;
    this.gin = c.gin;
    this.ddv = c.ddv;
    this.dfv = c.dfv;
  }
}

@Injectable()
export class ContratDaoService {

  constructor(
    private http: HttpClient
  ) { }


  getListeContrats(): Contrat[] {
    return [{
    id: 2,
    name: 'BUTAGAZ',
    description: 'The best case study for Catherine',
    country: 'FR',
    type: 'Standard',
    gin: '180000000001',
    ddv: '01/01/2020',
    dfv: '31/12/2020',
  }];
  }


}
