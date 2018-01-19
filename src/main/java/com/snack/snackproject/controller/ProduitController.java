package com.snack.snackproject.controller;


import com.snack.snackproject.model.Produit;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/produits")
@Controller
public class ProduitController {

    private List<Produit> produits = new ArrayList();

    ProduitController() {
        this.produits = buildProduits();
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Produit> getProduits() {
        return this.produits;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Produit getProduit(@PathVariable("id") Long id) {
        return this.produits.stream().filter(produit -> produit.getId() == id).findFirst().orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Produit saveProduit(@RequestBody Produit produit) {
        Long nextId = 0L;
        if (this.produits.size() != 0) {
            Produit lastProduit = this.produits.stream().skip(this.produits.size() - 1).findFirst().orElse(null);
            nextId = lastProduit.getId() + 1;
        }

        produit.setId(nextId);
        this.produits.add(produit);
        return produit;

    }

    @RequestMapping(method = RequestMethod.PUT)
    public Produit updateProduit(@RequestBody Produit produit) {
        Produit modifiedProduit = this.produits.stream().filter(u -> u.getId() == produit.getId()).findFirst().orElse(null);
        modifiedProduit.setNom(produit.getNom());
        modifiedProduit.setDescription(produit.getDescription());
        modifiedProduit.setPrix(produit.getPrix());
        return modifiedProduit;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public boolean deleteProduit(@PathVariable Long id) {
        Produit deleteProduit = this.produits.stream().filter(produit -> produit.getId() == id).findFirst().orElse(null);
        if (deleteProduit != null) {
            this.produits.remove(deleteProduit);
            return true;
        } else  {
            return false;
        }

    }

    //Mock
    List<Produit> buildProduits() {
        List<Produit> produits = new ArrayList<>();

        Produit produit1 = buildProduits(1L, "L'original", "Boeuf/Oignons/Cheddar/Moutarde/Pickles", 10.50F);
        Produit produit2 = buildProduits(2L, "Fatal Maroilles", "Boeuf/Confits Oignons/Maroilles/Moutarde/Ketchup", 12.00F);
        Produit produit3 = buildProduits(3L, "Le savoyard", "Boeuf/Raclette AOC/Lard fumé/Confit Oignons/Sauce aux poivres", 11.00F);


        produits.add(produit1);
        produits.add(produit2);
        produits.add(produit3);

        return produits;

    }

    Produit buildProduits(Long id, String nom, String description, float prix) {
        Produit produit = new Produit();
        produit.setId(id);
        produit.setNom(nom);
        produit.setDescription(description);
        produit.setPrix(prix);
        return produit;
    }

}
