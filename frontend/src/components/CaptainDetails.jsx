import React from "react";

import { FaCar } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";

const CaptainDetails = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-lg pb-2 pt-3 h-2/5">
        <div className="flex items-center justify-between px-5 pt-1 pb-2">
          <div className="flex items-center gap-3">
            <img
              className="h-25 rounded-full object-cover border border-gray-300"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR842Fs5CbWlIoQD0UG2A7xP_-dpvqZ-9hncg&s"
              alt="Captain profile"
            />
            <div>
              <h4 className="text-base font-semibold leading-tight">
                DRIVER NAME
              </h4>
              <span className="text-xs text-gray-500">Member Since xyz</span>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-lg font-semibold">$325.00</h4>
            <p className="text-xs text-gray-500">Today's Earnings</p>
          </div>
        </div>

        <div className="flex justify-between items-center bg-gray-200 rounded-xl mx-3 px-2 py-3 ">
          <div className="flex-1 flex flex-col items-center">
            <MdCurrencyExchange size={32} style={{ marginTop: "15px" }} />
            <span className="text-lg font-bold mt-5">$500</span>
            <span className="text-xs text-gray-700 mt-1 mb-2">
              TOTAL EARNINGS
            </span>
          </div>
          <div className="w-px h-8 bg-gray-300 mx-2"></div>
          <div className="flex-1 flex flex-col items-center">
            <GiPathDistance size={32} style={{ marginTop: "15px" }} />
            <span className="text-lg font-bold mt-5">30 KM</span>
            <span className="text-xs text-gray-700 mb-2 mt-1">
              TOTAL DISTANCE
            </span>
          </div>
          <div className="w-px h-8 bg-gray-300 mx-2"></div>
          <div className="flex-1 flex flex-col items-center">
            <FaCar size={32} style={{ marginTop: "15px" }} />
            <span className="text-lg font-bold mt-5">20</span>
            <span className="text-xs text-gray-700 mt-1 mb-2">TOTAL RIDES</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaptainDetails;
