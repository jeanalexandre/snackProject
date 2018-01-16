import {Component, OnDestroy, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../produit.service";
import {Produit} from "../produit";

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css'],
  providers: [ProduitService]
})
export class ProduitCreateComponent implements OnInit, OnDestroy {

  //attributs
  id: number;
  produit: Produit;

  produitForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private produitService: ProduitService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.produitForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required)
    });

    if (this.id){ // Si on a un id d'enregistré c'est une modification de produit
      this.produitService.findById(this.id).subscribe(
        produit => {
          this.id = produit.id;
          this.produitForm.patchValue({
            nom: produit.nom,
            description: produit.description,
            prix: produit.prix,
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
    if (this.produitForm.valid) {
      if (this.id) {
        let produit: Produit = new Produit(this.id,
          this.produitForm.controls['nom'].value,
          this.produitForm.controls['description'].value,
          this.produitForm.controls['prix'].value);
        this.produitService.updateProduit(produit).subscribe();
      } else {
        let produit: Produit = new Produit(null,
          this.produitForm.controls['nom'].value,
          this.produitForm.controls['description'].value,
          this.produitForm.controls['prix'].value);
        this.produitService.saveProduit(produit).subscribe();
      }
      this.produitForm.reset();
      this.router.navigate(['/produits']);
    }
  }

  redirectProduitPage(){
    this.router.navigate(['/produits']);
  }

}
