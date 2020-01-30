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
}

@Injectable()
export class ContratDaoService {

  constructor(
    private http: HttpClient
  ) { }

  getConfigContrats(): Observable<Contrat[]> {
    // now returns an Observable of Contrat[]
    return this.http.get<Contrat[]>(url + "contrats");
  }

  getListeContrats(): Contrat[] {
    let liste: Contrat[] = [];

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
