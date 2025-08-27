import { Request, Response } from "express";
import { missions } from "../src/data";
import { Controller } from "./Controller";


export class MissionController extends Controller{
  
  public browseMissions() {
    
    this.response.send(`bienvenue sur la page des missions`);
  }

  public readMission() {
    
    

    
   
    // Si je n'ai pas trouvé la mission
    if (!missions) {
      this.response.send(`La mission demandée n'existe pas`);
      return;
    }



    // Réponse avec infos sur la mission 
    this.response.render(`./pages/missionliste`, {
    missions,

    } );
  }
}
//   public editMission() {
//     this.response.send("Bienvenue sur l'édition de mission");
//   }

//   public addMission() {
//     this.response.send("Bienvenue sur l'ajout d'une mission");
//   }

//   public deleteMission() {
//     this.response.send("Bienvenue sur la suppression d'une mission");
//   }
// }
