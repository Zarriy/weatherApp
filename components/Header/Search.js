import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resultUpdater } from "@/store/searchSlice";

export default function Search() {
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);
  const tempScale = useSelector((state) => state.tempReducer.unit);
  const tempSymbol = useSelector((state) => state.tempReducer.symbol);
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const resultRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resultRef.current && !resultRef.current.contains(e.target)) {
        setResult(null);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [dispatch]);

  const fetchData = async (searchQuery) => {
    const fetching = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=33acfda1b05f90c39d450da10e3d77e3&units=${tempScale}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.cod === "404") {
          setError(true);
        } else {
          setResult(data);
          setError(false);
        }
      })
      .catch((err) => setError(true));
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;

    if (value.trim(" ").length > 0) {
      fetchData(value);
    }
  };

  return (
    <div className="">
      <form className="flex" onSubmit={handleSearchClick}>
        <div className="flex-1 relative">
          <input
            type="text"
            ref={inputRef}
            placeholder="Search City"
            className={`py-2 px-4 outline-none rounded-tl-lg rounded-bl-lg  text-sm w-full ${
              result && "border"
            }`}
          />
          {result && (
            <ul
              ref={resultRef}
              className="absolute bg-white px-2 py-3 rounded-sm border border-t-0 top-8 w-full"
            >
              <li
                onClick={() => {
                  dispatch(resultUpdater(result));
                  setResult(null);
                }}
                className="text-sm flex gap-4 items-center hover:bg-zinc-100 p-1 px-2 rounded-sm cursor-pointer"
              >
                <span className="flex gap-1 items-center flex-1">
                  {result.name}, {result.sys.country}
                  <Image
                    src={`https://openweathermap.org/images/flags/${result.sys.country.toLowerCase()}.png`}
                    alt="country Flad"
                    width={20}
                    height={20}
                  />
                </span>
                <span>
                  {Math.round(result.main.temp)}
                  {tempSymbol}
                </span>
                <span>
                  <Image
                    src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}
                    width={40}
                    height={40}
                    alt="weather icon"
                  />
                </span>
                <span className="text-xs text-neutral-300">
                  {result.coord.lat},{result.coord.lon}
                </span>
              </li>
            </ul>
          )}
        </div>
        <button
          className="text-sm px-6 py-2 h-9 rounded-tr-lg rounded-br-lg bg-zinc-600 hover:bg-zinc-500 text-slate-50"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
      {
        <p
          className={`text-xs my-2 font-light text-neutral-400 ${
            !error ? "invisible" : "visible"
          }`}
        >
          Not found. To make search more precise put the city&apos;s name,
          comma, 2-letter country code (ISO3166).
        </p>
      }
    </div>
  );
}
