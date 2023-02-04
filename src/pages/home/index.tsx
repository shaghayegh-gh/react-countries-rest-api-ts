import { useState, useEffect, useCallback } from "react";
import { getCountries } from "../../services/countries-service";
import Countries from "../../components/countries";
import { CountriesType } from "../../setup/global-types";

const Home = () => {
  const [countries, setCountries] = useState<CountriesType>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAllCountries = useCallback(
    () =>
      getCountries().then((data) => {
        setLoading(false);
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
    <div className="md:container md:mx-auto px-4">
      <Countries countries={countries} loading={loading} error={error} />
    </div>
  );
};

export default Home;
