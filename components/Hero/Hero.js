import CurrentReport from "./currentReport";
import MapCont from "./mapContainer";

export default function Hero() {
  return (
    <div className="pt-8 px-3">
      <CurrentReport />
      <MapCont />
    </div>
  );
}
