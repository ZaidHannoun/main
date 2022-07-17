import { body, param ,query } from "express-validator";
import validate from "../../../core/errorMiddleware.js";

const rules = [
  query("searchString").isString().withMessage("should be a string"),
  query("offset").optional().isInt().withMessage("offset should be a number"),
  query("limit").optional().isInt().withMessage("limit should be a number"),
  query("page").optional().isInt().withMessage("page should be a number"),

];

export default validate(rules);
