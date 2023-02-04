type ObjectTuple = { [K: string]: string };

export type CountryType = {
  name: string;
  capital: string;
  region: string;
  flag: string;
  population?: number;
  subregion?: string;
  altSpellings?: string[];
  flags?: ObjectTuple;
  latlng?: number[];
  demonym?: string;
  area?: number;
  timezones?: string[];
  borders?: string[];
  nativeName?: string;
  numericCode?: string;
  currencies?: ObjectTuple[];
  languages?: ObjectTuple[];
  translations?: ObjectTuple;
  regionalBlocs?: ObjectTuple[];
  cioc?: string;
  independent?: true;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
};

export type CountriesType = CountryType[];
