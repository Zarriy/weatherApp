import { BoltIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

export default function DataSupport() {
  const result = useSelector((state) => state.searchReducer);

  const data = [
    {
      Icon: BoltIcon,
      value: result.wind.speed,
      unit: "mph",
    },
    { title: "Pressure", value: result.main.pressure, unit: "hpa" },
    { title: "Humidity", value: result.main.humidity, unit: "%" },
    { title: "Visibility", value: result.visibility / 1000, unit: "km" },
  ];

  return (
    <ul className="border-l px-2 py-1 border-orange-400 max-w-[300px] flex flex-wrap gap-3">
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