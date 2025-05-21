import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";

const WaitingForDriver = (props) => {
  return (
    <>
      <div>
        <h5
          className="p-1 text-center w-[93%] absolute top-0"
          onClick={() => {
            props.setWaitingForDriver(false);
          }}
        >
          <TiArrowSortedDown size={25} className="relative left-[50%]" />
        </h5>

        <div className="flex justify-between items-center">
          <img
            className="h-10"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-xl font-medium -mb-1">Name</h2>
            <h4 className="text-lg font-semibold">DL01 AB 1234</h4>
            <h6 className="text-sm text-gray-600 ">Porche 911 GT3</h6>
          </div>
        </div>
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaRegUser style={{ display: "inline" }} />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaLocationArrow />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <MdCurrencyExchange />
            <div>
              <h3 className="text-lg font-medium">₹193.20 </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingForDriver;
