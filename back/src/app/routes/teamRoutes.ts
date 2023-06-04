import { Router } from "express";
import "../config/dotenv";
import {
  CreateTeamController,
  ListTeamController,
  UpdateTeamController,
} from "../controllers";

export const teamRoutes = (): Router => {
  const route = Router();

  route.post("/", CreateTeamController.handle);
  route.patch("/:id", UpdateTeamController.handle);
  route.get("/", ListTeamController.handle);

  return route;
};
