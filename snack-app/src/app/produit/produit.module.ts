import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProduitCreateComponent} from "./produit-create/produit-create.component";
import {ProduitListComponent} from "./produit-list/produit-list.component";
import {ProduitRoutingModule} from "./produit-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ProduitRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProduitListComponent, ProduitCreateComponent]
})
export class ProduitModule { }
