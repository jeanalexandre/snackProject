import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UtilisateurListComponent} from "./utilisateur-list/utilisateur-list.component";
import {UtilisateurCreateComponent} from "./utilisateur-create/utilisateur-create.component";

const routes: Routes = [
  {path: 'utilisateur', component: UtilisateurListComponent},
  {path: 'utilisateur/create' , component: UtilisateurCreateComponent},
  {path: 'utilisateur/edit/:id', component: UtilisateurCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
