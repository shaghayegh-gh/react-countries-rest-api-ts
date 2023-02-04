import { CountryType } from "../setup/global-types";

function Card({ flag, name, population, region, capital }: CountryType) {
  return (
    <div className="shadow-sm bg-white dark:bg-gray-600 rounded overflow-hidden ">
      <img src={flag} alt={name} className="sm:h-40 w-full object-cover" />

      <div className="p-2">
        <h4 className="font-semibold">{name}</h4>
        <ul className="text-sm">
          <li>
            <span className="font-medium">Population: </span>
            <span>{population} </span>
          </li>
          <li>
            <span className="font-medium">Region: </span>
            <span>{region} </span>
          </li>
          <li>
            <span className="font-medium">Capital: </span>
            <span>{capital} </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
