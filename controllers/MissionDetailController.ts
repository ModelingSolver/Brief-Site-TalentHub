import { Request, Response } from "express";
import { missions } from "../src/data";
import { Controller } from "./Controller";


export class MissionDetailController extends Controller{
  
  public browseMissions() {

    
    this.response.render(`./pages/missiondetail`, {
        missions,

    });
  }

  public readMission() {

      const missionId = parseInt(this.request.params.id, 10);

      const wantedmission = missions.find(mission => mission.id === missionId);




  // Si je n'ai pas trouvé la mission
   if (!missionId) {
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

  public addMission() {
    this.response.send("Bienvenue sur l'ajout d'une mission");
  }

  public deleteMission() {
    this.response.send("Bienvenue sur la suppression d'une mission");
  }
}