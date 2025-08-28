import { Request, Response } from "express";
import { missions } from "../src/data";
import { Controller } from "./Controller";
// IMPORT Z FROM ZORRO

export class MissionDetailController extends Controller{
  
  public browseMissions() {

    
    this.response.render(`./pages/missiondetail`, {
        missions,

    });
  }

  public readMission() {

     const  missionId = this.request.params.id;
      const wantedmission = missions.find(machin => {

        return machin.id === parseInt(missionId)
      })

  // Si je n'ai pas trouvé la mission
   if (!wantedmission) {
     this.response.send(`La mission demandée n'existe pas`);
     return;
    }


     this.response.render(`./pages/detail`, {
        wantedmission,
    });

   }

   public editMission() {
     this.response.send("Bienvenue sur l'édition de mission");
  }


 public showForm() {
    this.response.render("./pages/formulaire");
  }


// ZOD SCHEMA


  public addMission() {

    // 1. chopper le formulaire...
    const formData = this.request.body;
/////// FAUDRAIT SAFE-PARSER LA FORMDATA AVEC ZOD JE PRESUME ????!!!!!
    // 2. Creer mission objet
    const newMission = {
        id: missions.length + 1, // Creer un id unique
        titre: formData.titre,
        decription: formData.decription,
        // les skills sont une string que je rend array...
        skills: formData.skills.split(',').map(skill => skill.trim()),
        type: formData.type,
        date_debut: formData.date_debut,
        salaire_net: parseInt(formData.salaire_net, 10),
        unité_salaire: formData.unité_salaire,
        mdp: formData.mdp
    };

    // 3. Ajouter la nouvelle mission au tableau de data missions...
    missions.push(newMission);

    // 4. Redirection sur une autre page 
    this.response.redirect('/missiondetail');
  }

  

 public deleteMission() {
    
    const missionId = parseInt(this.request.params.id, 10);
    const { mdp } = this.request.body;
    const wantedmission = missions.find(m => m.id === missionId);

       if (!wantedmission) {
        this.response.status(404).send("Mission non trouvée");
        return;
    }

     // Vérifier le mot de passe
    if (wantedmission.mdp !== mdp) {
        this.response.status(403).send("Mot de passe incorrect");
        return;    
  }

  
    // Supprimer la mission
    const index = missions.indexOf(wantedmission);
    missions.splice(index, 1);

    this.response.send("Mission supprimée !");
}
}
