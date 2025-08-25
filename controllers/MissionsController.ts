import { Request, Response } from "express";
import * from './src/data';



export class MissionController extands GlobalsController{
  
  public browseMissions() {
    
    this.response.send(JSON.stringify(missions));
  }

  public readMission() {
    
    const requestedId = this.request.params.id;

    
    //const mission = missions.find((mission) => {
     // return mission.id == parseInt(requestedId);
    //});

    // Si je n'ai pas trouvé la mission
    if (!mission) {
      this.response.send(`La mission demandée n'existe pas`);
      return;
    }

    // Puisque j'ai trouvé la mission, j'utilise son ID pour identifier les commentaires correspondants.
    const zzz {
      return zzz;
    };

    // Réponse avec infos sur la mission 
    this.response.send(
      `Bienvenue sur le détail de la mission : ${mission.title}.` );
  }

  public editMission() {
    this.response.send("Bienvenue sur l'édition de mission");
  }

  public addMission() {
    this.response.send("Bienvenue sur l'ajout d'une mission");
  }

  public deleteMission() {
    this.response.send("Bienvenue sur la suppression d'une mission");
  }
}
