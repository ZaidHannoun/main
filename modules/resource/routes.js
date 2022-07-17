import express from "express";
const router = express.Router();
import * as controller from "./controller.js";
import createResourceMiddleware from "./validators/createResource.js";
import findResourceMiddleware from "./validators/findResource.js";

router.post("/create",createResourceMiddleware, controller.create);

router.get("/", controller.search);
export default router;
