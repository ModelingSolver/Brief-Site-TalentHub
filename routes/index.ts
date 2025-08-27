import { Router } from "express";
import globalRouter from "./global";
import detailmissionRouter from "./detailmission";
import  missionlisteRouter  from "./missionliste";

const router = Router();

router.use(globalRouter);
router.use(detailmissionRouter);
router.use(missionlisteRouter);

export default router;
