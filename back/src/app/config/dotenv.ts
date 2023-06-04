import * as dotenv from "dotenv";

import { EnvironmentsConstants } from "../constants/EnvironmentConstants";

const Environment = (): void => {
  const ENV = process.env.NODE_ENV;
  const PATH = EnvironmentsConstants.NODE_ENV_OPTIONS?.find(
    (config) => config.environment === ENV
  )?.dotenv;

  try {
    dotenv.config({
      path: PATH || ".env",
    });
  } catch (e) {
    throw Error(EnvironmentsConstants.ERROR);
  }
};

export default Environment();
