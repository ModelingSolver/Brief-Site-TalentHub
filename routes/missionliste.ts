import { Router } from "express";
import { MissionController } from "../controllers/MissionsListeController";


const missionlisteRouter = Router();

// Browse:
missionlisteRouter.get("/missionliste", (request, response) => {
  const controller = new MissionController(request, response);
  controller.browseMissions();
});

// Read:
missionlisteRouter.get("/missionliste/:id", (request, response) => {
  const controller = new MissionController(request, response);
  


});

export default missionlisteRouter;