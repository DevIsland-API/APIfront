import { Router } from "express";
import "../config/dotenv";
import {
  CreateGroupController,
  ListGroupController,
  UpdateGroupController,
} from "../controllers";

export const groupRoutes = (): Router => {
  const route = Router();

  route.post("/", CreateGroupController.handle);
  route.patch("/:id", UpdateGroupController.handle);
  route.get("/", ListGroupController.handle);

  return route;
};
