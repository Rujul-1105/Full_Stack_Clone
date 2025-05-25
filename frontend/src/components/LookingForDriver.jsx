import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <TiArrowSortedDown size={25} className="relative left-[50%]" />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaRegUser style={{ width: "20px" }} />
            <div>
              <h3 className="text-lg font-medium w-[95%] ml-3">
                PickUp Location
              </h3>
              <p className="text-sm -mt-1 ml-3 text-gray-600">{props.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaLocationArrow />
            <div>
              <h3 className="text-lg font-medium ml-3 w-[95%]">Destination</h3>
              <p className="text-sm -mt-1 text-gray-600 ml-3">
                {props.destination || "Destination not set"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <MdCurrencyExchange />
            <div>
              <h3 className="text-lg font-medium ml-3">
                ₹ {props.fare?.fare[props.vehicleType] || ""}{" "}
              </h3>
              <p className="text-sm -mt-1 text-gray-600  ml-3">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
