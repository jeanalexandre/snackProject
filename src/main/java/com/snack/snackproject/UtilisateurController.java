package com.snack.snackproject;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/utilisateurs")
public class UtilisateurController {
    private List<Utilisateur> utilisateurs = new ArrayList();


    UtilisateurController() {
        this.utilisateurs = buildUtilisateurs();
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Utilisateur> getUtilisateurs() {
        return this.utilisateurs;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Utilisateur getUtilisateur(@PathVariable("id") Long id) {
        return this.utilisateurs.stream().filter(utilisateur -> utilisateur.getId() == id).findFirst().orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Utilisateur saveUtilisateur(@RequestBody Utilisateur utilisateur) {
        Long nextId = 0L;
        if (this.utilisateurs.size() != 0) {
            Utilisateur lastUtilisateur = this.utilisateurs.stream().skip(this.utilisateurs.size() - 1).findFirst().orElse(null);
            nextId = lastUtilisateur.getId() + 1;
        }

        utilisateur.setId(nextId);
        this.utilisateurs.add(utilisateur);
        return utilisateur;

    }

    @RequestMapping(method = RequestMethod.PUT)
    public Utilisateur updateUtilisateur(@RequestBody Utilisateur utilisateur) {
        Utilisateur modifiedUtilisateur = this.utilisateurs.stream().filter(u -> u.getId() == utilisateur.getId()).findFirst().orElse(null);
        modifiedUtilisateur.setNom(utilisateur.getNom());
        modifiedUtilisateur.setPrenom(utilisateur.getPrenom());
        modifiedUtilisateur.setEmail(utilisateur.getEmail());
        return modifiedUtilisateur;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public boolean deleteUtilisateur(@PathVariable Long id) {
        Utilisateur deleteUtilisateur = this.utilisateurs.stream().filter(utilisateur -> utilisateur.getId() == id).findFirst().orElse(null);
        if (deleteUtilisateur != null) {
            this.utilisateurs.remove(deleteUtilisateur);
            return true;
        } else  {
            return false;
        }


    }

    List<Utilisateur> buildUtilisateurs() {
        List<Utilisateur> utilisateurs = new ArrayList<>();

        Utilisateur utilisateur1 = buildUtilisateur(1L, "Florian", "Blot", "florian.blot@gmail.com");
        Utilisateur utilisateur2 = buildUtilisateur(2L, "Fabien", "Dubois", "fabien.dubois@gmail.com");
        Utilisateur utilisateur3 = buildUtilisateur(3L, "Evan", "Martho", "evan.martho@gmail.com");
        Utilisateur utilisateur4 = buildUtilisateur(4L, "Antoine", "Rato", "antoine.rato@gmail.com");
        Utilisateur utilisateur5 = buildUtilisateur(5L, "Jean-Alexandre", "Gautreau", "jeanalexandre.gautreau@gmail.com");
        Utilisateur utilisateur6 = buildUtilisateur(6L, "Nael", "ABC", "nael.abc.gautreau@gmail.com");
        Utilisateur utilisateur7 = buildUtilisateur(7L, "Loic", "Colin", "loic.colin.gautreau@gmail.com");


        utilisateurs.add(utilisateur1);
        utilisateurs.add(utilisateur2);
        utilisateurs.add(utilisateur3);
        utilisateurs.add(utilisateur4);
        utilisateurs.add(utilisateur5);
        utilisateurs.add(utilisateur6);
        utilisateurs.add(utilisateur7);

        return utilisateurs;

    }

    Utilisateur buildUtilisateur(Long id, String nom, String prenom, String email) {
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setId(id);
        utilisateur.setNom(nom);
        utilisateur.setPrenom(prenom);
        utilisateur.setEmail(email);
        return utilisateur;
    }
}
