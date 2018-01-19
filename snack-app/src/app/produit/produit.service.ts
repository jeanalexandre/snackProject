import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {Produit} from "./produit";


@Injectable()
export class ProduitService {

  private apiUrl = 'http://localhost:8080/produits';

  constructor(private http: Http) { }

  findAll(): Observable<Produit[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Erreur serveur'));
  }

  findById(id: number): Observable<Produit> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Erreur serveur'))
  }

  saveProduit(produit: Produit): Observable<Produit> {
    return this.http.post(this.apiUrl, produit)
      .catch((error:any) => Observable.throw(error.json().error || 'Erreur serveur'));
  }

  deleteProduitById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Erreur serveur'));
  }


  updateProduit(produit: Produit): Observable<Produit> {
    return this.http.put(this.apiUrl, produit)
      .catch((error:any) => Observable.throw(error.json().error || 'Erreur serveur'));
  }

}
