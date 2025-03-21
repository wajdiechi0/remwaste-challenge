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
      className={`relative rounded-xl bg-dark-700 p-6 cursor-pointer duration-200  ${
        isSelected
          ? "ring-2 ring-blue-600"
          : "ring-0 hover:ring-2 hover:ring-blue-700"
      }`}
      onClick={() => onSelect(skip)}
    >
      <div className="relative w-full h-48 mb-6">
        {isSelected && (
          <div className="absolute -top-1 -right-1 w-[2px] h-2 bg-blue-600 rotate-45" />
        )}
        <img
          src="/skip-sample.jpeg"
          alt={`${skip.size} Yard Skip`}
          className="w-full h-full object-cover  rounded-lg"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs xs:text-sm font-medium">
          {skip.size} Yards
        </div>
        {skip.isPrivateOnly && (
          <div className="absolute bottom-4 left-4 flex items-center text-yellow-500 text-xs bg-black px-2 py-1 rounded-lg">
            <HiOutlineExclamationTriangle className="mr-2 w-4 h-4" />
            <span>Private Property Only</span>
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <span className="text-lg xs:text-xl font-bold text-white">
          {skip.size} Yard Skip
        </span>

        <span className="text-xs xs:text-sm text-gray-400 my-2">
          {skip.hirePeriod} day hire period
        </span>

        <div className="mt-3">
          <span className="text-base xs:text-2xl font-bold text-blue-600">
            £{skip.pricePerWeek}
          </span>
          <span className="font-normal text-xs xs:text-sm text-gray-400 ml-2">
            per week
          </span>
        </div>
      </div>

      <button
        className={`mt-3 text-white w-full py-3 rounded-lg font-medium text-xs xs:text-base ${
          isSelected
            ? "bg-blue-700 hover:bg-blue-600"
            : "bg-dark-600 hover:bg-dark-400"
        }`}
      >
        {isSelected ? "Selected" : "Select This Skip →"}
      </button>
    </div>
  );
};
