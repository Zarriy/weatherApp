import Map from "react-map-gl";
import { useSelector } from "react-redux";

export default function MapCont() {
  const widthBool = useSelector((state) => state.mapReducer);
  const result = useSelector((state) => state.searchReducer.searchResult);
  const { lat, lon } = result.coord;
  const key = `${lat}-${lon}`;
  return (
    <div className="">
      <Map
        key={key}
        mapStyle="mapbox://styles/sulem/cldts8kdp003301qmemce6p41"
        mapboxAccessToken="pk.eyJ1Ijoic3VsZW0iLCJhIjoiY2xkdHMza2lkMDhwajNvbHNnNGhpbTJhMCJ9.H9XU29atfbHy8u1EyNvAdg"
        style={{
          height: 200,
          width: widthBool ? 400 : "auto",
        }}
        initialViewState={{ longitude: lon, latitude: lat, zoom: 12 }}
      />
    </div>
  );
}
