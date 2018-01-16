package com.snack.snackproject.model;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Panier {

    private HashMap<Produit, Integer> produits;

    public HashMap<Produit, Integer> getProduits() {
        return produits;
    }

    public void ajouter(Produit produit, Integer quantite) {
        this.produits.put(produit,quantite);
    }
}
