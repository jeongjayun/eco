//local vue api axios instance

import axios from "axios";

function apiInstance() {
  const instance = axios.create({
    baseURL: ProcessingInstruction.env.VUE_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return instance;
}

export { apiInstance };
