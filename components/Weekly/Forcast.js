import { useSelector } from "react-redux";
import DailyCard from "./dailyCard";

export default function Forcast() {
  const data = useSelector((state) => state.searchReducer.forcastResult);

  const filterData = data.list.filter((item, i) => i % 8 === 0);

  return (
    <div class="px-3 lg:w-5/6 lg:flex-row mx-auto mt-20 mb-10">
      <h2 className="font-medium text-xl text-zinc-600 mb-6">5-day Forcast</h2>
      <div>
        <div className="flex justify-evenly items-center border-b border-zinc-300 text-center  text-sm text-gray-400">
          <div className="text-left grow basis-0 px-4">Day</div>
          <div className="grow basis-0"></div>
          <div className="grow basis-0 hidden sm:block">Description</div>
          <div className="grow basis-0 hidden sm:block">Humidity</div>
          <div className="grow basis-0">Temperature</div>
        </div>
        {filterData.map((data, i) => (
          <DailyCard key={i} forcast={data} />
        ))}
      </div>
    </div>
  );
}
