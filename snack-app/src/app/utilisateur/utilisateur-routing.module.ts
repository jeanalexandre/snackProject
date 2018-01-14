import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UtilisateurListComponent} from "./utilisateur-list/utilisateur-list.component";
import {UtilisateurCreateComponent} from "./utilisateur-create/utilisateur-create.component";

const routes: Routes = [
  {path: 'utilisateurs', component: UtilisateurListComponent},
  {path: 'utilisateur/creer' , component: UtilisateurCreateComponent},
  {path: 'utilisateur/modifier/:id', component: UtilisateurCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
