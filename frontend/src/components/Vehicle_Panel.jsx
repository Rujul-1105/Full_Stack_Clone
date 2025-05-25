import React from "react";
import { FaRegUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const Vehicle_Panel = (props) => {
  return (
    <div className="bg-white">
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <TiArrowSortedDown size={25} className="relative left-[50%]" />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehicleType("car");
          props.setVehiclePanel(false);
        }}
        className="flex items-center justify-between border-1 active:border-black active:border-2 mb-2 rounded-xl w-full p-3"
      >
        <img
          className="h-10 w-16 object-contain"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="ml-5 w-1/2">
          <h4 className="font-medium text-base">UberGo</h4>
          <span>
            <FaRegUser style={{ display: "inline" }} /> 4
          </span>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">
          $ {props.fare?.fare?.car || "fare.."}
        </h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehicleType("moto");

          props.setVehiclePanel(false);
        }}
        className="flex items-center justify-between border-1 active:border-black active:border-2 mb-2 rounded-xl w-full p-3"
      >
        <img
          className="h-10 w-16 object-contain"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-5 w-1/2">
          <h4 className="font-medium text-base">UberMoto</h4>
          <span>
            <FaRegUser style={{ display: "inline" }} /> 1
          </span>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">
          $ {props.fare?.fare?.moto || "fare.."}
        </h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehicleType("auto");

          props.setVehiclePanel(false);
        }}
        className="flex items-center justify-between border-1 active:border-black active:border-2 mb-2 rounded-xl w-full p-3"
      >
        <img
          className="h-10 w-16 object-contain"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="ml-5 w-1/2">
          <h4 className="font-medium text-base">UberAuto</h4>
          <span>
            <FaRegUser style={{ display: "inline" }} /> 3
          </span>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable Auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">
          $ {props.fare?.fare?.auto || "fare.."}
        </h2>
      </div>
    </div>
  );
};

export default Vehicle_Panel;
