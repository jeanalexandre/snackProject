import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../utilisateur.service";
import {Utilisateur} from "../utilisateur";

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css'],
  providers: [UtilisateurService]
})
export class UtilisateurListComponent implements OnInit {

  private users: Utilisateur[]

  constructor(private userService: UtilisateurService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.findAll().subscribe(
      users => {
        this.users = users;
      },
      err => {
        console.log(err);
      }

    );
  }

}
