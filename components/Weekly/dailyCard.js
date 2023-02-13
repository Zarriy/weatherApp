import Image from "next/image";
import { useSelector } from "react-redux";

export default function DailyCard({ forcast }) {
  const tempSymbol = useSelector((state) => state.tempReducer.symbol);

  const day = () => {
    const date = new Date(forcast.dt * 1000);
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekday[date.getDay()];
  };

  return (
    <div className="flex justify-evenly text-center items-center border-b border-gray-200">
      <div className="text-left grow basis-0 px-4">{day()}</div>
      <div className="grow basis-0">
        {" "}
        <Image
          width={70}
          height={70}
          src={`http://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png`}
          alt="icon"
        />
      </div>
      <div className="grow basis-0 hidden sm:block text-sm">
        {forcast.weather[0].description.charAt().toUpperCase() +
          forcast.weather[0].description.slice(1)}
      </div>
      <div className="grow basis-0 hidden sm:block">
        {forcast.main.humidity}%
      </div>
      <div className="grow basis-0">
        {Math.round(forcast.main.temp)}
        {tempSymbol}
      </div>
    </div>
  );
}
