import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {Utilisateur} from "./utilisateur";

@Injectable()
export class UtilisateurService {

  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: Http) { }

  findAll(): Observable<Utilisateur[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Utilisateur> {
    return null;
  }

  saveUser(user: Utilisateur): Observable<Utilisateur> {
    return null;
  }

  deleteUserById(id: number): Observable<boolean> {
    return null;
  }

  updateUser(user: Utilisateur): Observable<Utilisateur> {
    return null;
  }

}
