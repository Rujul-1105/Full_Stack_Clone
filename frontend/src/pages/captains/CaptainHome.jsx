import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../../components/CaptainDetails'
import RidePopUp from '../../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../../components/ConfirmRidePopUp'


const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );

  return (
    <>
      <div className="h-screen w-screen">
        <div className="h-3/5">
          <img
            className="w-16 absolute left-5 top-5"
            src="https://imgs.search.brave.com/dP-nhv2AI8MlNX8CuO06kb0KSPsdjlC53Jog_wuEBSM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9VYmVyL1Vi/ZXItV2hpdGUtRGFy/ay1CYWNrZ3JvdW5k/LUxvZ28ud2luZS5z/dmc"
            alt=""
          />
          <img
            className="h-screen object-cover w-full"
            src="https://www.apple.com/v/maps/d/images/overview/background_dark_alt__hm9e3tmexhm6_xlarge.jpg"
            alt=""
          />
        </div>

        <div className="h-2/5 p-6">
          <CaptainDetails />
        </div>
        <div
          ref={ridePopupPanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
        >
          <RidePopUp
            setRidePopupPanel={setRidePopupPanel}
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          />
        </div>
        <div
          ref={confirmRidePopupPanelRef}
          className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
        >
          <ConfirmRidePopUp
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
            setRidePopupPanel={setRidePopupPanel}
          />
        </div>
      </div>
    </>
  );
};

export default CaptainHome;
