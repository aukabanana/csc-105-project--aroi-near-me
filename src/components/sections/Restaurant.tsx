import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function RestaurantHeader() {
  return (
    <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6 px-4 overflow-visible">

      {/* Left */}
      <div className="flex items-center gap-2 md:gap-3 min-w-fit">
        <div className="bg-gray-700 p-1.5 md:p-2 rounded-md md:rounded-lg">
          <FontAwesomeIcon
            icon={faUtensils}
            className="text-white text-sm md:text-lg"
          />
        </div>

        <div className="leading-tight">
          <h1 className="text-base md:text-xl font-semibold text-white whitespace-nowrap">
            Restaurant
          </h1>
          <p className="text-yellow-400 text-xs md:text-sm whitespace-nowrap">
            Explore our restaurant
          </p>
        </div>
      </div>

      {/* Line */}
      <hr className="flex-1 h-[2px] bg-gray-600 border-0 mx-2 md:mx-4" />

    </div>
  );
}