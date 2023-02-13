import { useSelector, useDispatch } from "react-redux";
import { updateTempScale } from "@/store/tempSlice";

export default function TempScale() {
  const tempScale = useSelector((state) => state.tempReducer.unit);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-end">
      <div className="text-xs flex gap-6 bg-zinc-200 p-2 rounded-sm relative w-60 h-8">
        <div
          className={`transition duration-300 ease-out bg-white w-28 absolute h-6 top-1 rounded-sm ${
            tempScale === "imperial" ? "right-1" : "left-1"
          }`}
        ></div>
        <div
          className="cursor-pointer z-10 flex flex-1 justify-center"
          onClick={() =>
            dispatch(updateTempScale({ un: "metric", sym: <> &#8451;</> }))
          }
        >
          Metrics: &#8451;, m/s
        </div>
        <div
          className="cursor-pointer z-10 flex flex-1 justify-center"
          onClick={() =>
            dispatch(updateTempScale({ un: "imperial", sym: <> &#8457;</> }))
          }
        >
          Imperial: &#8457;, mph
        </div>
      </div>
    </div>
  );
}
