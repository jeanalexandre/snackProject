import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { UtilisateurCreateComponent } from './utilisateur-create/utilisateur-create.component';

@NgModule({
  imports: [
    CommonModule,
    UtilisateurRoutingModule
  ],
  declarations: [UtilisateurListComponent, UtilisateurCreateComponent]
})
export class UtilisateurModule { }
