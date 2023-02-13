import TimeConvertor from "@/utils/timeConver";
import Image from "next/image";
import { useSelector } from "react-redux";
import DataSupport from "./snippet";

export default function CurrentReport() {
  const result = useSelector((state) => state.searchReducer);
  const tempSymbol = useSelector((state) => state.tempReducer.symbol);

  console.log(result);
  return (
    <>
      {result && (
        <div className="text-zinc-600">
          <span className="text-sm text-orange-600 font-light">
            {TimeConvertor(result.dt)}
          </span>
          <h2 className="text-3xl font-medium mt-0">
            {result.name},{result.sys.country}
          </h2>
          <div>
            <div className="font-medium mt-2">
              <span>
                Feels Like {Math.round(result.main.feels_like)}
                {tempSymbol}.{" "}
                {result.weather[0].description.charAt().toUpperCase() +
                  result.weather[0].description.slice(1)}
              </span>
            </div>
            <div className="flex gap-6 justify-between mt-2">
              <div className="flex items-center">
                <Image
                  width={70}
                  height={70}
                  src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}
                  alt="icon"
                />
                <span className="text-3xl font-medium">
                  {Math.round(result.main.temp)}
                  {tempSymbol}
                </span>
              </div>
              <DataSupport />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
