import { Router } from "express";
import "../config/dotenv";
import { CreateUserController, ListUserController } from "../controllers";

export const userRoutes = (): Router => {
  const route = Router();

  route.post("/", CreateUserController.handle);
  route.get("/", ListUserController.handle);

  return route;
};
