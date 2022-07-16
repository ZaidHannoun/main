import express from "express";

import resourceRouter from "./modules/resource/routes.js";
import { ApiError } from "./errors/ApiError.js";
import connect from "./core/db.js";

connect()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/resource", resourceRouter);

    app.use((err, req, res, next) => {
      if (err instanceof ApiError) {
        return res.status(err.code).json(err);
      }
      res.status(500).send({
        code: 500,
        message: "Something broke!",
      });
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log("server is listening on port 3000");
    });
  })
  .catch((err) => console.log(err));
