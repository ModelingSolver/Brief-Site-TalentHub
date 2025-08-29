import { Router } from "express";
import { MissionDetailController } from "../controllers/MissionDetailController";


const detailmissionRouter = Router();

// Browse
detailmissionRouter.get("/missiondetail", (request, response) => {
  const controller = new MissionDetailController(request, response);
  controller.browseMissions();
});

// Read
detailmissionRouter.get("/detail/:id", (request, response) => {
  const controller = new MissionDetailController(request, response);
  controller.readMission()

});



// Edit
//Router.put("/detailmission/:id", (request, response) => {
// const controller = new missionDetailController(request, response);
//  controller.editmissionDetail();
//});

// Add
   detailmissionRouter.post("/formulaire", (request, response) => {
   const controller = new MissionDetailController(request, response);
   controller.addMission();
 });

 
// GET Route d affichage formulaire
detailmissionRouter.get("/formulaire", (request, response) => {
  const controller = new MissionDetailController(request, response);
  controller.showForm(); // You will need to create this method in your controller
});


 // Delete
detailmissionRouter.delete("/detail/:id", (request, response) => {
  const controller = new MissionDetailController(request, response);
   controller.deleteMission();
 });

export default detailmissionRouter;