import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import SortDropDown from "../ui/SortDropDown";

export default function MenuHeader() {
  const [sort, setSort] = useState("Default");

  const options = [
    "Default",
    "Price low to high",
    "Price high to low",
  ];

  return (
    <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6 px-4 overflow-hidden">

      {/* Left */}
      <div className="flex items-center gap-2 md:gap-3 min-w-0">
        <div className="bg-red-500/20 p-1.5 md:p-2 rounded-md md:rounded-lg">
          <FontAwesomeIcon
            icon={faTag}
            className="text-red-400 text-sm md:text-lg"
          />
        </div>

        <div className="leading-tight min-w-0">
          <h1 className="text-base md:text-xl font-semibold text-white truncate">
            Menu
          </h1>
          <p className="text-yellow-400 text-xs md:text-sm truncate">
            Explore our collection
          </p>
        </div>
      </div>

      {/* Line */}
      <hr className="flex-1 h-[2px] bg-gray-600 border-0 mx-2 md:mx-4" />

      {/* Right */}
      <SortDropDown
        options={options}
        value={sort}
        onChange={setSort}
      />
    </div>
  );
}