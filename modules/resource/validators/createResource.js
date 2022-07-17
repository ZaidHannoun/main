import { body, param } from "express-validator";
import validate from "../../../core/errorMiddleware.js";

const rules = [
  body("title").isString().withMessage("title should be a string"),
  body("path").isURL().withMessage("invalid URL"),
  body("tags").isArray().withMessage("invalid tags"),
  body("type").isIn(["image", "html"]),
];

export default validate(rules);
