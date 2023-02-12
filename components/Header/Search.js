export default function Search() {
  return (
    <div className="">
      <div className="flex flex-1 ">
        <input
          type="text"
          placeholder="Search City"
          className="py-2 px-4 outline-none rounded-tl-lg rounded-bl-lg  text-sm w-full"
        />
        <button className="text-sm px-6 py-2 rounded-tr-lg rounded-br-lg bg-zinc-600 hover:bg-zinc-500 text-slate-50">
          Search
        </button>
      </div>
      {
        <p className="text-xs my-2 font-light text-neutral-400 invisible">
          Not found. To make search more precise put the city&apos;s name,
          comma, 2-letter country code (ISO3166).
        </p>
      }
    </div>
  );
}
