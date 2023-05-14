import axios from "axios";
import ApplicationConstants from "../configs/ApplicationConstants";

const APIBackend = axios.create({
  baseURL: ApplicationConstants.API_BACKEND,
});

export { APIBackend };
