import { CountriesType } from "../setup/global-types";

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
            <p key={i}>{c.name}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default Countries;
