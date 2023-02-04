import { api } from "../setup/api";
import { getRequest } from "../setup/axios-config";
import { CountriesType } from "../setup/global-types";

export const getCountries = async () =>
  await getRequest(api.countries).then((res) => res);

export const getCountriesByRegion = async (region: string) =>
  await getRequest(api.region(region)).then((res: CountriesType) => res);

export const getCountryByName = async (name: string) =>
  await getRequest(api.county(name)).then((res: CountriesType) => res);
