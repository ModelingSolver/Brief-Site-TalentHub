import { Router } from "express";
import globalRouter from "./global";
import detailmissionRouter from "./detailmission";


const router = Router();

router.use(globalRouter);
router.use(detailmissionRouter);

export default router;
