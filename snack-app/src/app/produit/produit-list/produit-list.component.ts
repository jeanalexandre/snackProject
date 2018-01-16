import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Produit} from "../produit";
import {ProduitService} from "../produit.service";
import {Utilisateur} from "../../utilisateur/utilisateur";

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css'],
  providers: [ProduitService]
})
export class ProduitListComponent implements OnInit {

  private produits: Produit[]

  constructor(private router: Router ,
              private produitService: ProduitService) { }

  ngOnInit() {
    this.getAllProduits();
  }

  getAllProduits() {
    this.produitService.findAll().subscribe(
      produits => {
        this.produits = produits;
      },
      err => {
        console.log(err);
      }

    );
  }

  redirectNouveauProduitPage() {
    this.router.navigate(['/produit/creer']);
  }

  modifierProduitPage(produit: Produit) {
    if (produit) {
      this.router.navigate(['/produit/modifier', produit.id]);
    }
  }

  supprimerProduit(produit: Produit) {
    if (produit) {
      this.produitService.deleteProduitById(produit.id).subscribe(
        res => {
          this.getAllProduits();
          this.router.navigate(['/produits']);
          console.log('done');
        }
      )
    }
  }

}
