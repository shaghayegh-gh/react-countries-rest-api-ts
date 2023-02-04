import { CountriesType } from "../setup/global-types";
import Card from "./card";

type CountriesProps = {
  countries: CountriesType;
  loading: boolean;
  error: boolean;
};

function Countries({ countries, loading, error }: CountriesProps) {
  return (
    <>
      {loading && (
        <p className="text-center font-bold m-20 text-4xl">Loading...</p>
      )}
      {error && !loading && (
        <p className="text-center font-bold m-20 text-4xl">Not found!</p>
      )}
      {!loading && !error && (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8">
          {countries.map((c, i) => (
            <Card
              key={i}
              flag={c.flag}
              name={c.name}
              population={c.population}
              region={c.region}
              capital={c.capital}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Countries;
