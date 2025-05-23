import React from "react";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaLocationArrow, FaRegUser } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <TiArrowSortedDown size={25} className="relative left-[50%]" />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this Ride</h3>
      <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-12"
            src="https://i.pinimg.com/736x/37/48/34/374834df1a831ef06682bc718d1374c7.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">Passenger Name</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaRegUser />
            <div>
              <h3 className="text-lg font-medium">111/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaLocationArrow />

            <div>
              <h3 className="text-lg font-medium">111/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <MdCurrencyExchange />
            <div>
              <h3 className="text-lg font-medium">$200 </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <Link
            to="/CaptainHome"
            className="w-full mt-5 flex  text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Receive Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
