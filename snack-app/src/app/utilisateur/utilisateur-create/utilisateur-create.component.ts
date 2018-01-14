import {Component, OnDestroy, OnInit} from '@angular/core';
import {UtilisateurService} from "../utilisateur.service";
import {Utilisateur} from "../utilisateur";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-utilisateur-create',
  templateUrl: './utilisateur-create.component.html',
  styleUrls: ['./utilisateur-create.component.css'],
  providers: [UtilisateurService]
})
export class UtilisateurCreateComponent implements OnInit, OnDestroy {

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

    this.utilisateurForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])
    });

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
      if (this.id) {
        let utilisateur: Utilisateur = new Utilisateur(this.id,
          this.utilisateurForm.controls['nom'].value,
          this.utilisateurForm.controls['prenom'].value,
          this.utilisateurForm.controls['email'].value);
        this.utilisateurService.updateUser(utilisateur).subscribe();
      } else {
        let utilisateur: Utilisateur = new Utilisateur(null,
          this.utilisateurForm.controls['nom'].value,
          this.utilisateurForm.controls['prenom'].value,
          this.utilisateurForm.controls['email'].value);
        this.utilisateurService.saveUser(utilisateur).subscribe();
      }
      this.utilisateurForm.reset();
      this.router.navigate(['/utilisateurs']);
    }
  }

  redirectUtilisateurPage(){
    this.router.navigate(['/utilisateurs']);
  }

}
