import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitCreateComponent} from "./produit-create/produit-create.component";
import {ProduitListComponent} from "./produit-list/produit-list.component";


const routes: Routes = [
  {path: 'produits', component: ProduitListComponent},
  {path: 'produit/creer' , component: ProduitCreateComponent},
  {path: 'produit/modifier/:id', component: ProduitCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
