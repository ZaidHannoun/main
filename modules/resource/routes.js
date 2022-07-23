import express from "express";
const router = express.Router();
import * as controller from "./controller.js";
import findResourceMiddleware from "./validators/findResource.js";
import createResourceMiddleware from "./validators/createResource.js";


router.post("/create", createResourceMiddleware,controller.create);

router.get("/",findResourceMiddleware, controller.search);
export default router;
