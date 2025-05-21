import React from "react";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";

const ConfirmPayment = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <img
          className="h-1/2"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />

        <div className="w-full mt-5 p-5">
          <div className="flex justify-between items-center mb-10">
            <img
              className="h-15"
              src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
              alt=""
            />
            <div className="text-right">
              <h2 className="text-xl font-medium -mb-1">Name</h2>
              <h4 className="text-lg font-semibold">DL01 AB 1234</h4>
              <h6 className="text-sm text-gray-600 ">Porche 911 GT3</h6>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaRegUser style={{ display: "inline" }} />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">PickUp Location</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaLocationArrow />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Destination</p>
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

        <div className="text-center">
          <button
            to="/"
            className="w-[75%] mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
            onClick={() => {
              // Handle payment confirmation logic here
              // For example, you might want to update the state or make an API call
            }}
          >
            <p>
              <MdCurrencyExchange
                style={{ display: "inline", marginRight: "15px" }}
              />
              Make Payment to Confirm
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmPayment;
