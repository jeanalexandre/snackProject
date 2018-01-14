import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../utilisateur.service";
import {Utilisateur} from "../utilisateur";
import {Router} from "@angular/router";

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css'],
  providers: [UtilisateurService]
})
export class UtilisateurListComponent implements OnInit {

  private utilisateurs: Utilisateur[]

  constructor(private router: Router ,
              private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.utilisateurService.findAll().subscribe(
      utilisateurs => {
        this.utilisateurs = utilisateurs;
      },
      err => {
        console.log(err);
      }

    );
  }

  redirectNouvelUtilisateurPage() {
    this.router.navigate(['/utilisateur/creer']);
  }

  modifierUtilisateurPage(utilisateur: Utilisateur) {
    if (utilisateur) {
      this.router.navigate(['/utilisateur/modifier', utilisateur.id]);
    }
  }

  supprimerUtilisateur(utilisateur: Utilisateur) {
    if (utilisateur) {
      this.utilisateurService.deleteUserById(utilisateur.id).subscribe(
        res => {
          this.getAllUsers();
          this.router.navigate(['/utilisateurs']);
          console.log('done');
        }
      )
    }
  }

}
