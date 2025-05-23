import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");

  const submitHander = (e) => {
    e.preventDetault();
  };
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <TiArrowSortedDown size={25} className="relative left-[50%]" />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start
      </h3>
      <div className="flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-12"
            src="https://i.pinimg.com/736x/37/48/34/374834df1a831ef06682bc718d1374c7.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">Passenger Name</h2>
        </div>
        <h5 className="text-lg font-semibold">22 KM</h5>
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

        <div className="mt-6 w-full">
          <form
            onSubmit={(e) => {
              submitHander(e);
            }}
          >
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3"
              placeholder="Enter OTP"
            />

            <Link
              to="/CaptainRiding"
              className="w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full mt-2 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
