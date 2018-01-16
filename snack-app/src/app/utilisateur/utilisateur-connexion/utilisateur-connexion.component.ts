import {Component, OnDestroy, OnInit} from '@angular/core';
import {UtilisateurService} from "../utilisateur.service";
import {Utilisateur} from "../utilisateur";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-utilisateur-connexion',
  templateUrl: './utilisateur-connexion.component.html',
  styleUrls: ['./utilisateur-connexion.component.css'],
  providers: [UtilisateurService]
})
export class UtilisateurConnexionComponent implements OnInit, OnDestroy {

  id: number;
  utilisateur: Utilisateur;

  utilisateurForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    if (this.id){ // Si on a un id d'enregistré c'est une modification d'utilisateur
      this.utilisateurService.findById(this.id).subscribe(
        utilisateur => {
          this.id = utilisateur.id;
          this.utilisateurForm.patchValue({
            nom: utilisateur.nom,
            prenom: utilisateur.prenom,
            email: utilisateur.email,
          });
        },error => {
          console.log(error);
        }
      )
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit () {
    if (this.utilisateurForm.valid) {
        let utilisateur: Utilisateur = new Utilisateur(null,
          this.utilisateurForm.controls['password'].value,
          this.utilisateurForm.controls['identifiant'].value,
          '');
        this.utilisateurService.connectUser(utilisateur).subscribe();
      this.utilisateurForm.reset();
      this.router.navigate(['/utilisateurs']);
    }
  }

  redirectUtilisateurPage(){
    this.router.navigate(['/utilisateurs']);
  }

}
