import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const SearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (E) => {
    if (activeField === "pickup") {
      setPickup(E.description);
    } else if (activeField === "destination") {
      setDestination(E.description);
    }
  };

  return (
    <div>
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex gap-4 border-2 p-3 active:border-black rounded-xl bg-[#000] items-center my-2 justify-start text-white cursor-pointer"
        >
          
          <h2 className="bg-[#000] flex items-center justify-center w-16 h-16 rounded-full ">
            <FaLocationArrow />
          </h2>
          <h4 className="font-medium">{elem.description}</h4>
        </div>
      ))}
    </div>
  );
};

export default SearchPanel;
