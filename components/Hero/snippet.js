import { BoltIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

export default function DataSupport() {
  const result = useSelector((state) => state.searchReducer.searchResult);
  const tempScale = useSelector((state) => state.tempReducer.unit);

  const data = [
    {
      Icon: BoltIcon,
      value: result.wind.speed,
      unit: tempScale === "metric" ? "m/s" : "mph",
    },
    { title: "Pressure", value: result.main.pressure, unit: "hpa" },
    { title: "Humidity", value: result.main.humidity, unit: "%" },
    { title: "Visibility", value: result.visibility / 1000, unit: "km" },
  ];

  return (
    <ul className="border-l px-2 py-1 border-orange-400 flex flex-wrap gap-3 max-w-[340px]">
      {data.map(({ Icon, title, value, unit }) => (
        <li key={value} className="flex items-center gap-1 text-sm">
          {Icon && <Icon className="w-4 h-4" />}
          {title && <span>{title}:</span>}
          {value}
          {unit}
        </li>
      ))}
    </ul>
  );
}
