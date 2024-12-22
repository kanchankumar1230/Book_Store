//YHA PR APNE ROUTE KO DEFINE KARENGE

import express from "express";

//ROUTE K ANDAR APNE FUNCTION IMPORT KR LIYE
import {getBook} from "../controller/Book.controller.js";

const router = express.Router();
router.get("/",getBook);

export default router;
 






