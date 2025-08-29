import { Request, Response } from "express";
import { missions } from "../src/data";
import { Controller } from "./Controller";
// import { z } from 'zod';


// const newMissionSchema = z.object ({

//         id: z.number.min(1).max(999999999),
//         titre: z.string.max(100),
//         decription: z.string.min(1).max(500),
//         skills: z.string.min(0).max(200).optional,
//         type: z.string.min(3).max(3),
//         date_debut: z.date,
//         salaire_net: z.number.min(0).max(999999999),
//         unité_salaire: z.string.min(4).max(12),
//         mdp: z.password

// })



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



  public addMission() {

    // 1. chopper le formulaire...
    const formData = this.request.body;

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

    /////// FAUDRAIT SAFE-PARSER LA FORMDATA AVEC ZOD JE PRESUME ????!!!!!
    // const result = newMissionSchema.safeParse(12); 
    // if (!result.success) {
    // result.error.issues;
    // }

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
