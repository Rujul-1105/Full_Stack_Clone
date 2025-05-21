import React, { useRef, useState } from "react";
import { useContext } from "react";
import { UserDataContext } from "../../context/UserContext";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TiArrowSortedDown } from "react-icons/ti";
import SearchPanel from "../../components/SearchPanel";
import Vehicle_Panel from "../../components/Vehicle_Panel";
import ConfirmRidePanel from "../../components/ConfirmRide";
import LookingForDriver from "../../components/LookingForDriver";
import WaitingForDriver from "../../components/WaitingForDriver";

const Home = () => {
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const VehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const LookingForDriverRef = useRef(null);
  const VehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);

  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
  });
  const [panelOpen, setPanelOpen] = useState(false);
  const [VehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);
  useGSAP(() => {
    if (VehiclePanel) {
      gsap.to(VehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(VehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [VehiclePanel]);
  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(VehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(VehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          className="w-16 absolute left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/800px-Uber_logo_2018.svg.png"
          alt=""
        />

        <div className="h-screen w-screen">
          <img
            className="h-full w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-end absolute w-full h-screen top-0 ">
          <div className="realtive h-[30%] bg-white p-6 ">

            
            <div
              ref={panelCloseRef}
              className="absolute top-5 right-6 opacity-0"
              onClick={() => {
                setPanelOpen(false);
              }}
            >
              <TiArrowSortedDown size={25} />
            </div>
            <h4 className="font-semibold text-2xl my-2">Find a trip</h4>

            <form
              className="relative py-3"
              action=""
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="line absolute h-20 w-1 top-[27%] left-5 bg-gray-700 rounded-full"></div>

              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                onClick={() => {
                  setPanelOpen(true);
                }}
                placeholder="Pickup location"
                className="w-full px-12 py-4 my-2 border border-gray-200 rounded-lg bg-white text-black text-base transition-all focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
              <input
                type="text"
                name="Drop"
                value={formData.drop}
                onChange={handleChange}
                onClick={() => {
                  setPanelOpen(true);
                }}
                placeholder="Drop Point"
                className="w-full px-12 py-4 my-2 border border-gray-200 rounded-lg bg-white text-black text-base transition-all focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
            </form>
          </div>

          <div ref={panelRef} className="relative h-0 bg-gray-100">
            <SearchPanel
              setVehiclePanel={setVehiclePanel}
              setPanelOpen={setPanelOpen}
            />
          </div>


          <div
            ref={VehiclePanelRef}
            className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
          >
            <Vehicle_Panel
              setVehiclePanel={setVehiclePanel}
              setConfirmRidePanel={setConfirmRidePanel}
            />
          </div>

          <div
            ref={confirmRidePanelRef}
            className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
          >
            <ConfirmRidePanel
              setConfirmRidePanel={setConfirmRidePanel}
              setVehicleFound={setVehicleFound}
              setVehiclePanel={setVehiclePanel}
            />
          </div>

          <div
            ref={VehicleFoundRef}
            className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
          >
            <LookingForDriver setVehicleFound={setVehicleFound} />
          </div>


          <div
            ref={WaitingForDriverRef}
            className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
          >
            <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
          </div>

          



        </div>
      </div>
    </>
  );
};

export default Home;
