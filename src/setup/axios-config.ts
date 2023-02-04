import axios, { AxiosResponse } from "axios";
import { CountriesType } from "./global-types";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 2500,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

type GetCountriesResponse = {
  data: CountriesType;
};

export const getRequest = async (url: string) =>
  await axiosClient
    .get<GetCountriesResponse>(url)
    .then((res: AxiosResponse<GetCountriesResponse>) => res.data);
