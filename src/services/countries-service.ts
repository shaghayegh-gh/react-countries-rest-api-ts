import { api } from "../setup/api";
import { getRequest } from "../setup/axios-config";

export const getCountries = async () =>
  await getRequest(api.countries).then((res) => res);
