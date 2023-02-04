import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountryByName } from "../../services/countries-service";
import { CountryType } from "../../setup/global-types";

const Country = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<CountryType | null>(null);

  const countryData = useCallback(
    (name: string) =>
      getCountryByName(name)
        .then((data) => {
          if (data) {
            setCountry(data[0]);
            return;
          }
        }),
    []
  );

  useEffect(() => {
    if (name) {
      countryData(name);
    }
  }, [countryData, name]);

  const goBack = () => navigate(-1);

  return (
    <div className="md:container md:mx-auto px-4">
      <span
        className="shadow p-2 mb-5 flex w-20 d cursor-pointer rounded  bg-white dark:bg-gray-600"
        onClick={() => goBack()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </span>
      {!country && <h1>Not found!</h1>}
      {country && (
        <div className="grid md:grid-cols-2 sm:grid-cols-1  gap-8">
          <div>
            <img src={country.flag} alt={name} />
          </div>
          <div className="mb-5">
            <h1 className="text-3xl font-bold mb-8">{name}</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1  gap-4">
              <div>
                <ul className="text-sm font-medium">
                  <li>
                    Native Name:{" "}
                    <span className="font-light">{country.nativeName}</span>
                  </li>
                  <li>
                    Population:{" "}
                    <span className="font-light">{country.population}</span>
                  </li>
                  <li>
                    Region: <span className="font-light">{country.region}</span>
                  </li>
                  <li>
                    Sub Region:{" "}
                    <span className="font-light">{country.subregion}</span>
                  </li>
                  <li>
                    Capital:{" "}
                    <span className="font-light">{country.capital}</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-sm font-medium">
                  <li>
                    TopLevel Domain:
                    {country.topLevelDomain?.map((item, i) => (
                      <span className="font-light" key={i}>
                        {item}
                      </span>
                    ))}
                  </li>
                  <li>
                    Currencies:
                    {country.currencies?.map((item, i) => (
                      <span className="font-light" key={i}>
                        {item.name}
                      </span>
                    ))}
                  </li>
                  <li>
                    languages:
                    {country.languages?.map((item, i) => (
                      <span className="font-light" key={i}>
                        {item.name}
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
            {country.borders?.length ? (
              <div className="mt-10">
                <span>Border Countries:</span>
                {country.borders.map((item, i) => (
                  <span
                    key={i}
                    className="mx-1 mb-1 px-4 shadow inline-block rounded  bg-white dark:bg-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
