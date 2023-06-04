import { Router } from "express";
import "../config/dotenv";

export const miscelaneousRoutes = (): Router => {
  const route = Router();

  route.get("/", (request, response) => {
    return response.status(200).send({
      env: process.env.NODE_ENV,
      app_name: process.env.APP_NAME,
      powered_by: process.env.RESPONSIBLE_SQUAD,
      message: "API ONLINE",
      status: 200,
    });
  });

  return route;
};
