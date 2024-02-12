import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PEODUCTION
  ? "http://3.109.229.7/"
  : "http://localhost:8000/api/v1/saranshrealtorsindia";

export const App_NAME = publicRuntimeConfig.App_NAME;
