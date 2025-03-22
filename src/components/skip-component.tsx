import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { SkipDisplay } from "../types/skip";

interface SkipComponentProps {
  skip: SkipDisplay;
  isSelected: boolean;
  onSelect: (skip: SkipDisplay) => void;
}

export const SkipComponent = ({
  skip,
  isSelected,
  onSelect,
}: SkipComponentProps): JSX.Element => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-700 to-dark-800 p-6 cursor-pointer duration-300 ${
        isSelected
          ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20"
          : "hover:ring-2 hover:ring-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
      }`}
      onClick={() => onSelect(skip)}
    >
      {/* Content */}
      <div className="relative">
        <div className="relative w-full h-52 mb-6 rounded-xl group-hover:scale-[1.02] duration-300">
          <img
            src="/skip-sample.jpeg"
            alt={`${skip.size} Yard Skip`}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />

          <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            {skip.size} Yards
          </div>

          {skip.isPrivateOnly && (
            <div className="absolute bottom-4 left-4 flex items-center bg-black/80 backdrop-blur-sm text-yellow-400 text-sm px-3 py-1.5 rounded-lg">
              <HiOutlineExclamationTriangle className="mr-2 w-5 h-5" />
              <span>Private Property Only</span>
            </div>
          )}
        </div>

        {/* Skip Details */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg xs:text-xl font-bold text-white mb-1">
              {skip.size} Yard Skip
            </h3>
            <p className="text-xs xs:text-sm text-gray-400">
              {skip.hirePeriod} day hire period
            </p>
          </div>

          <div className="flex items-baseline">
            <span className="text-base xs:text-2xl font-bold text-blue-400">
              £{skip.pricePerWeek}
            </span>
            <span className="ml-2 text-xs xs:text-sm text-gray-400">per week</span>
          </div>

          <button
            className={`w-full py-3 rounded-xl font-medium text-xs xs:text-sm duration-300 ${
              isSelected
                ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-dark-600 hover:bg-dark-500 text-white"
            }`}
          >
            {isSelected ? "Selected" : "Select This Skip →"}
          </button>
        </div>
      </div>

      {isSelected && (
        <div className="absolute top-4 -right-4 w-8 h-8 bg-blue-500 rotate-45 " />
      )}
    </div>
  );
};
