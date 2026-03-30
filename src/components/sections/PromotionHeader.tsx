import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import SortDropDown from "../ui/SortDropDown";

export default function PromotionHeader() {
  const [sort, setSort] = useState("Default");

  const options = [
    "Default",
    "Price low to high",
    "Price high to low",
  ];

  return (
    <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">

      {/* Left */}
        <div className="flex items-center gap-2 md:gap-4 min-w-0">
            <FontAwesomeIcon icon={faTag} className="bg-yellow-500/20
            text-sm sm:text-3xl md:text-3xl p-2.5 rounded-xl text-yellow-500"/>

            <div className="leading-tight min-w-0">
                <h1 className="text-base md:text-xl font-semibold text-white truncate">
                    Today's Promotion
                </h1>
                <p className="text-yellow-400 text-xs md:text-sm truncate">
                    Limited-time special offers
                </p>
            </div>
        </div>

      {/* Line */}
      <hr className="flex-1 h-0.5 bg-white border-t mx-2 md:mx-4" />

      {/* Right */}
      <SortDropDown
        options={options}
        value={sort}
        onChange={setSort}
      />
    </div>
  );
}