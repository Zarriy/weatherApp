import { useState } from "react";

export default function TempScale() {
  const [right, setRight] = useState(false);

  return (
    <div className="flex justify-end">
      <div className="text-xs flex gap-6 bg-zinc-200 p-2 rounded-sm relative w-60 h-8">
        <div
          className={`transition duration-300 ease-out bg-white w-28 absolute h-6 top-1 rounded-sm ${
            right ? "right-1" : "left-1"
          }`}
        ></div>
        <div
          className="cursor-pointer z-10 flex flex-1 justify-center"
          onClick={() => setRight(false)}
        >
          Metrics: &#8451;, m/s
        </div>
        <div
          className="cursor-pointer z-10 flex flex-1 justify-center"
          onClick={() => setRight(true)}
        >
          Imperial: &#8457;, mph
        </div>
      </div>
    </div>
  );
}
