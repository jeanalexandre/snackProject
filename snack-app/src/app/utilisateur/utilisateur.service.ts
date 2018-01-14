import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {Utilisateur} from "./utilisateur";

@Injectable()
export class UtilisateurService {

  private apiUrl = 'http://localhost:8080/utilisateurs';

  constructor(private http: Http) { }

  findAll(): Observable<Utilisateur[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Erreur serveur'));
  }

  findById(id: number): Observable<Utilisateur> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Erreur serveur'))
  }

  saveUser(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post(this.apiUrl, utilisateur)
      .catch((error:any) => Observable.throw(error.json().error || 'Erreur serveur'));
  }

  deleteUserById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Erreur serveur'));
  }

  updateUser(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put(this.apiUrl, utilisateur)
      .catch((error:any) => Observable.throw(error.json().error || 'Erreur serveur'));
  }

}
