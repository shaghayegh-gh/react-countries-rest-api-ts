import { useEffect, useState } from "react";
import  { get, set } from "local-storage";

type ChangMod = () => void

const Header = () => {
  let mod = get<boolean>("darkMod");
  const [darkMod, setDarkMod] = useState(mod);
  const element = document.getElementById("root") as HTMLElement

  useEffect(() => {
    if (mod) { 
        element.classList.add("dark");
    }
    // eslint-disable-next-line
  }, [mod]);

  const changMod:ChangMod = () => {
    element.classList.toggle("dark");
    set<boolean>("darkMod", !darkMod);
    setDarkMod((prev) => !prev);
  };

  return (
    <div className="flex flex space-x-2 bg-white dark:bg-gray-600 p-4  mb-4 shadow">
      <div className="md:container md:mx-auto flex justify-between">
        <span>Where in The world?</span>
        <span className="flex cursor-pointer" onClick={changMod}>
          {!darkMod ? (
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
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
          Dark mod
        </span>
      </div>
    </div>
  );
};

export default Header;
