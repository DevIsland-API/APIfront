import { Router } from "express";
import { formRoutes } from "./formRoutes";
import { groupRoutes } from "./groupRoutes";
import { miscelaneousRoutes } from "./miscelaneousRoutes";
import { teamRoutes } from "./teamRoutes";
import { userRoutes } from "./userRoutes";

export const appRoutes = (): Router => {
  const routes = Router();
  routes.use("/healthCheck", miscelaneousRoutes());
  routes.use("/formManagement", formRoutes());
  routes.use("/user", userRoutes());
  routes.use("/group", groupRoutes());
  routes.use("/team", teamRoutes());

  return routes;
};
