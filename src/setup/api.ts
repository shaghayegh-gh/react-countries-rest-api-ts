export const api = {
  countries: "/all",
  region: (region:string) => `/region/${region}`,
  county: (name:string) => `/name/${name}`,
};
