import express from "express";
const router = express.Router();
import * as controller from "./controller.js";

router.post("/create", controller.create);

router.get("/:search", controller.search);
export default router;
