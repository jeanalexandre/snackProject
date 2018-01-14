import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { UtilisateurCreateComponent } from './utilisateur-create/utilisateur-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UtilisateurListComponent, UtilisateurCreateComponent]
})
export class UtilisateurModule { }
