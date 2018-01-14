export class Utilisateur {

  id: number;
  nom: string;
  prenom: string;
  email: string;

  constructor(id: number, nom: string, prenom: string, email: string){
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
  }

}
