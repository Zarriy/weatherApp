import CurrentReport from "./currentReport";
import MapCont from "./mapContainer";

export default function Hero() {
  return (
    <div className="pt-8 px-3 flex flex-col gap-8 lg:w-5/6 lg:flex-row mx-auto">
      <CurrentReport />
      <MapCont />
    </div>
  );
}
