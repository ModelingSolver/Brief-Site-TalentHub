import { Router } from "express";
import { MissionDetailController } from "../controllers/MissionDetailController";


const detailmissionRouter = Router();

// Browse
detailmissionRouter.get("/missiondetail", (request, response) => {
  const controller = new MissionDetailController(request, response);
  controller.browseMissions();
});

// Read
detailmissionRouter.get("/detailmission/:id", (request, response) => {
  const controller = new MissionDetailController(request, response);
  controller.readMission()

});

// Edit
//detailmissionRouter.put("/detailmission/:id", (request, response) => {
// const controller = new detailmissionController(request, response);
//  controller.editdetailmission();
//});

// Add
// detailmissionRouter.post("/detailmission", (request, response) => {
//   const controller = new detailmissionController(request, response);
//   controller.adddetailmission();
// });

// // Delete
// detailmissionRouter.delete("/detailmission/:id", (request, response) => {
//   const controller = new detailmission(request, response);
//   controller.deletedetailmission();
// });

export default detailmissionRouter;