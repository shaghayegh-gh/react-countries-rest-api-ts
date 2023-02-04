import { useState, useEffect, useCallback } from "react";
import { getCountries } from "../../services/countries-service";
import { CountriesType } from "../../setup/global-types";

function Home() {
  const [countries, setCountries] = useState<CountriesType>([]);

  const getAllCountries = useCallback(
    () =>
      getCountries().then((data) => {
        setCountries(data);
      }),
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    getAllCountries();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {countries.map((c, i) => (
        <p key={i}>{c.name}</p>
      ))}
    </div>
  );
}

export default Home;
