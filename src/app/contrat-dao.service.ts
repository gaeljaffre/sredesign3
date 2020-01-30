import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, BehaviorSubject} from "rxjs";

export const url = 'https://RedesignBackend.voyagesgael.repl.co/';

export interface Contrat {
  id: number;
  name: string;
  description: string;
  country: string;
  type: string;
  gin: string;
  ddv: string;
  dfv: string;

/*
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  */
  /*
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
  */
}

@Injectable()
export class ContratDaoService {

  constructor(
    private http: HttpClient
  ) { }

/*
  getConfigContrats(): Observable<Contrat[]> {
    // now returns an Observable of Contrat[]
    return this.http.get<Contrat[]>(url + "contrats");
  }
*/
  getConfigContrats(): Observable<Contrat[]> {
    // now returns an Observable of Contrat[]
    return this.http.get<Contrat[]>(url + "contrats");
  }

/*
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
*/

  getListeContrats(): Contrat[] {
    let liste: Contrat[] = [];

/*
    return this.getConfigContrats().subscribe(
      (data: any[]) => {
          //if(data.length){
          if(true) {
            console.log("data: " + data);
            //chat = new Cat(data[0].id, data[0].name, data[0].numero);
            chat = new Cat(data[0]);
            this.cat = chat;
            this.cat2 = data[0];
            nom = data[0].name;
            console.log("name = " + nom);
            console.log("name chat = " + chat.name);
            console.log("chat = " + chat);
          }
      }
      , err => {
                console.log("Erreur : " + err.message);
              },
        () => {
          console.log('completed: ' + nom);
        }
      );
    console.log('fin: ' + nom);
  }
  */
  this.http.get(url + "contrats").subscribe(
      (data: any[]) => {
          if(data.length) {
            for (let contrat of data) {
              liste.push(contrat);
              //console.log("ligne = " + contrat.name);
            }
          }
      }
      , err => {
                console.log("Erreur : " + err.message);
              },
        () => {
          //console.log('completed');
        }
      );
    return liste;
  }
}
