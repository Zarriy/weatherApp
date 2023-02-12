import TempScale from "./TempScale";
import Search from "./Search";

export default function Header() {
  return (
    <div className="bg-zinc-100 width-full">
      <div className="pt-6 px-3 flex flex-col gap-2 mx-auto sm:flex-row-reverse justify-center sm:gap-6">
        <TempScale />
        <Search />
      </div>
    </div>
  );
}
