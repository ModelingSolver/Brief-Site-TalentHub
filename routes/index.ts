import { Router } from "express";
import globalRouter from "./routes";
import aaaRouter from "./aaa";
import bbbRouter from "./bbb";
import cccRouter from "./ccc";


const router = Router();

router.use(globalRouter);
router.use(aaaRouter);
router.use(bbbRouter);
router.use(cccRouter);


export default router;
